import * as React from "react";
import MoviesWrapper from "../components/MoviesWrapper";
import {apiKey} from "../utils";
import Select from 'react-select';

class Task2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            page: { value: 1, label: 'Page 1'},
            pageOptions: { value: 1, label: 'Page 1'}
        };

        this.fetchData = this.fetchData.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    generatePageNumbers(num) {
        let options = [];
        for (let i = 1; i <= num; ++i) {
            options.push({value: i, label: `Page ${i}`})
        }
        return options;
    }

    fetchData(pageNum) {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey()}&language=en-US&page=${pageNum}`)
            .then(response => response.json())
            .then(data => this.setState({"data": data, pageOptions: this.generatePageNumbers(data.total_pages)}));
    }

    componentDidMount() {
        this.fetchData(this.state.page.value);
    }

    handlePageChange(page) {
        this.setState({"page": page});
        this.fetchData(page.value);
    }

    render() {
        const {data, page, pageOptions} = this.state;

        return data
            ? (
                <div className="container">
                    <h1 className="title is-1">Popular Movies</h1>
                    <MoviesWrapper data={data}/>
                    <div>
                        <br/>
                        <div className="columns is-vcentered">
                            <div className="column is-1">
                                <span className="title is-5">Page:</span>
                            </div>
                            <div className="column is-2">
                                <Select
                                    value={page}
                                    onChange={this.handlePageChange}
                                    options={pageOptions}
                                />
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            )
            : <h1 className="title is-3">Loading...</h1>;
    }
}

export default Task2;
