import React, {PropTypes} from 'react';
import HintMessage from '../../components/HintMessage/HintMessage';
import RepositoryRow from '../../components/RepositoryRow';
import Paginator from '../Paginator';

class RepositoryList extends React.PureComponent {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        queried: PropTypes.bool.isRequired,
        search: PropTypes.string.isRequired
    };

    // Mostrem missatge al moment de cercar
    renderMessage() {

        let text = '';
        let count = this.props.data.length;

        if (this.props.loading) {
            text = <span>Cercant respositoris per "{this.props.search}"...</span>;
        }
        else if (count > 0) {
            text = <span>S'han trobat {count} respositoris per "{this.props.search}":</span>;
        }
        else if (count === 0 && this.props.queried) {
            text = <span>No s'han trobat repositoris per la cerca "{this.props.search}".</span>;
        }
        else {
            text = <span>Escriu el nom del repositori i prem "Cerca".</span>;
        }
        return <HintMessage>{text}</HintMessage>
    }

    // Mostrem taula per rederitzar els resultats
    renderTable() {

        if (this.props.data.length === 0) {
            return null;
        }

        return <table className="u-full-width">
            <thead>
            <tr>
                <th>Repository</th>
                <th>Owner</th>
                <th>Stars</th>
                <th>Forks</th>
                <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {
                this.props.data.map(repo =>
                    <RepositoryRow repo={repo} key={repo.id}></RepositoryRow>
                )
            }
            </tbody>
        </table>;
    }

    /**
     * Render the RepositoryList component
     */
    render() {
        return <section className="RepositoryList">
            {this.renderMessage()}
            {this.renderTable()}
        </section>;
    }
}

// Export the class
export default Paginator(RepositoryList);
