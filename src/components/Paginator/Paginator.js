import React, {PropTypes} from 'react';
import './Paginator.css';

export default PaginatedComponent => {

    class Paginator extends React.Component {

        static propTypes = {
            itemsPerPage: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(PropTypes.object).isRequired
        };

        // Valors per defecte
        static defaultProps = {
            itemsPerPage: 8,
        };

        constructor(props) {

            super(props);

            this.onClick = this.onClick.bind(this);

            this.state = {
                page: 0
            };
        }

        // @Override Amb això podem saber si el component rep noves props
        // Bàsicament, per reiniciar el procés sense haver de muntar i desmuntar el component que seria no òptim
        componentWillReceiveProps(nextProps) {

            let page = this.state.page;

            // Forcem a 0 si no hi ha la pàgina en qüestió a la nova renderització
            if ((nextProps.data.length / this.props.itemsPerPage) < page) {
                page = 0;
            }

            // Només modifiquem el state si ha canviat el número de pàgina
            if (page !== this.state.page) {
                this.setState({page: page});
            }
        }

        // Click dels elements de la paginació
        onClick(e, page) {
            e.preventDefault();

            // Només modifiquem el state si ha canviat el número de pàgina
            if (page !== this.state.page) {
                this.setState({page});
            }
        }

        renderPagination() {

            let numberPages = Math.ceil(this.props.data.length / this.props.itemsPerPage);
            let pages = [];

            if (numberPages > 1) {
                for (let i = 0; i < numberPages; i++) {

                    // Definim la classe
                    let cssClass = 'Paginator__Page' + (i === this.state.page ? " Paginator__Page--active" : "");

                    // Posem una key en elements repetitius per temes d'optimització
                    pages.push(
                        <a href="#" className={cssClass} key={i} onClick={(e) => this.onClick(e, i)}>
                            {i + 1}
                        </a>
                    );

                }
            }

            return <div className="Paginator__Pagination">{pages}</div>;
        }

        // Devuelve datos página acutal
        pageData() {
            let data = [];
            if (this.props.data.length > 0) {
                data = this.props.data.slice(this.state.page * this.props.itemsPerPage,
                    (this.state.page + 1) * this.props.itemsPerPage);
            }
            return data;
        }

        render() {

            let newProps = Object.assign({}, this.props, {
                data: this.pageData()
            });

            return <div className="Paginator">
                <PaginatedComponent {...newProps} />
                {this.renderPagination()}
            </div>;
        }
    }

    // Això ho fem pel tema dels test unitaris, sinó no ens retorna el que esperem
    Paginator.WrappedComponent = PaginatedComponent;

    return Paginator;
}
