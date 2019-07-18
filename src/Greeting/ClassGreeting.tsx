import React from "react";
import { ThemeContext } from "../Context/ThemeContext"
import { LocaleContext } from "../Context/LocaleContext"

class ClassGreeting extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            surname: this.props.surname,
            width: window.innerWidth,
        }
    }

    componentDidMount() {
        document.title = this.state.name + " " + this.state.surname;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = this.state.name + " " + this.state.surname;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleNameChange = (value) => {
        this.setState({
            name: value
        })
    }

    handleResize = () => {
        this.setState({width: window.innerWidth});
    }

    handleSurnameChange = (value) => {
        this.setState({
            surname: value
        })
    }

    render() {
        return <ThemeContext.Consumer>
            {theme => <div className={theme}>
                <h3>Class Component</h3>
                <input value={this.state.name}
                    onChange={(e) => this.handleNameChange(e.target.value)} />
                <input value={this.state.surname}
                    onChange={(e) => this.handleSurnameChange(e.target.value)} />
                <LocaleContext.Consumer>
                    {locale => <p>{locale}</p>}
                </LocaleContext.Consumer>
                <p>{this.state.width}</p>
            </div>}
        </ThemeContext.Consumer>
    }
}

export default ClassGreeting;