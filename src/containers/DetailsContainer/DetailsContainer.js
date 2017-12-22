import React, {PropTypes} from 'react';
import ReleaseList from '../../components/ReleaseList';


/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {

    static propTypes = {
        params: PropTypes.shape({
            user: PropTypes.string.isRequired,
            repo: PropTypes.string.isRequired
        }).isRequired,

        // Injectem api react router
        router: PropTypes.object.isRequired
    };

    constructor(props) {

        super(props);

        this.back = this.back.bind(this);

        this.state = {
            releases: [],
            loading: false
        };
    }

    // Ho fem aquí perquè això s'ha de fer cada cop que el component que es monta,
    // sense que hi hagi cap acció de l'usuasri
    componentDidMount() {

        this.setState({loading: true});

        // Llegim dades del servidor fent servir FETCH
        fetch(`https://api.github.com/repos/${this.repoName}/releases`)
            .then(res => res.json())
            .then(res => {
                // En aquest cas ho guardem a l'state del component, no en el store!!!
                console.log(res);
                console.log(res);
                this.setState({releases: res, loading: false});
            })
            .catch(err => {
                // Mostrem error per consola si n'hi ha
                console.log(err);
                this.setState({loading: false});
            });

    }

    get repoName() {
        return `${this.props.params.user}/${this.props.params.repo}`;
    }

    back() {

        // Afegeix nova ruta a la pila
        // this.props.rotuer.push('/');

        // Reemplaça l'actual
        // this.props.rotuer.replace('/');

        // Anem enrere tal qual
        this.props.router.goBack();
    }

    /**
     * UI del contenedor
     */
    render() {
        return <div>
            <h2>Releases of <strong>{this.repoName}</strong></h2>
            <ReleaseList
                data={this.state.releases}
                loading={this.state.loading}
                repoName={this.repoName}/>
        </div>;
    }
}

// Export the class
export default DetailsContainer;
