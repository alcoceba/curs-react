import React, {PropTypes} from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search: ''
        };
    }

    onChange(e) {
        this.setState({search: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render() {

        // Recordar sempre englobar sempre dintre d'un mateix tag DIV o el que sigui.
        // Fem servir defaultValue en lloc de 'value' per prevenir errors. El 'value a seques es de només lectura

        return <form onSubmit={this.onSubmit}>
            <label>Cerca al repositori</label>
            <input type="text" className="u-full-width" placeholder="react, webpack..."
                   onChange={this.onChange} defaultValue={this.state.search}/>
            <p className="align-center">
                <button type="submit" className="button-primary">Cerca</button>
            </p>
        </form>;
    }
}

// Export the class
export default SearchForm;
