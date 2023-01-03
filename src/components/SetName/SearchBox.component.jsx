import React, { Component } from 'react';
import PackageCard from '../PackageCard/PackageCard.component';

export default class SearchBox extends Component {
    constructor() {
        super();

        this.state = {
            npm_package: [],
            set_default: false
        }
    }

    onTextInput = (e) => {
        const name = e.target.value;

        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.findPackage(name);
        }, 500)
    }

    findPackage = async (name) => {
        const res = await fetch(`https://api.npms.io/v2/search?q=${name}`);
        const data = await res.json();
        const npm_package = data.results;
        this.setState(() => {
            return { npm_package: npm_package }
        })
    }


    render() {
        const { npm_package } = this.state;
        return (
            <div>
                <input className="search-box"
                    type="search"
                    placeholder='Enter a package name'
                    onChange={this.onTextInput} />
                {
                    npm_package?.map((pack) => {
                        if (pack.package.name.includes('@')) return(<div></div>);
                        return (
                            <PackageCard data={pack.package} />
                        )
                    })}
            </div>
        )
    }
}