
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });

    }


    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }

        } catch (e) {

        }

        console.log('mount');
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count != prevState.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('saving');

        }
    }
    componentWillUnmount() {
        console.log('Unmount');
    }

    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });

    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }
}




ReactDOM.render(<Counter />, document.getElementById('app'));

