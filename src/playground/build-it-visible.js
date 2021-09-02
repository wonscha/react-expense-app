
// let visibility = false;

// const onFlipVisibility = () => {
//     visibility = !visibility;
//     render();
// }


// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility App</h1>
//             <button onClick={onFlipVisibility}>{visibility ? 'hide details' : 'show details'}</button>
//             {visibility && <p>Hey! These are some details now you can see!</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// render();

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {this.state.visibility && <p>Hey! These are some details you can now see!</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

