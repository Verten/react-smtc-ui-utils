import React, {Component} from 'react';
import {Table, Label, Dropdown} from 'semantic-ui-react'
import PropTypes from "prop-types";
import TablePagination from "./TablePagination";
import {getRandomNumber} from "../static/ObjectsUtils";


//{key: 't', text: '1', value: '1'},
const pageOptions = [
    {key: 's', text: '10', value: '10'},
    {key: 'm', text: '20', value: '20'},
    {key: 'l', text: '50', value: '50'},
]

/**
 * pagination footer example:
 * using data count and page size to calculate the pagination bar
 *
 * @type {{ colCount: *, pageSize: *, handlePageClick: *, dataCount: *}}
 */
export class PaginationFooter extends Component {


    static propTypes = {
        colCount: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        handlePageClick: PropTypes.func.isRequired,
        dataCount:PropTypes.number.isRequired,
    }

    state={
        footerKey:getRandomNumber(),
    }

    handlePageClick(val) {
        this.props.handlePageClick(val);
        this.setState({
            pageSize:val,
            footerKey: getRandomNumber(),
        });
    }

    render() {

        const {colCount, pageSize,dataCount} = this.props;

        const {footerKey} = this.state;

        return (
            <Table.Row>
                <Table.HeaderCell colSpan={1}>
                    <div>
                        <Label color='purple' ribbon>Page Size:</Label>
                        <Dropdown upward floating inline
                                  options={pageOptions}
                                  defaultValue={'20'}
                                  name={"pageSize"}
                                  onChange={this.handlePageSizeChange}
                        />
                    </div>
                </Table.HeaderCell>

                <Table.HeaderCell key={footerKey} colSpan={colCount - 1 <= 0 ? 1 : colCount - 1}>

                    <TablePagination
                        totalPages={Math.ceil((dataCount === undefined ? 1 : dataCount) / pageSize)}
                        getActivePages={(val) => this.handlePageClick(val)}
                    />
                </Table.HeaderCell>
            </Table.Row>


        )
    }
}


// Secondary do not have page size selection label
export class PaginationFooterSecondary extends Component {


    static propTypes = {
        colCount: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        handlePageClick: PropTypes.func.isRequired,
        dataCount:PropTypes.number.isRequired,
    }

    state={
        footerKey:getRandomNumber(),
    }

    handlePageClick(val) {
        this.props.handlePageClick(val);
        this.setState({
            pageSize:val,
            footerKey: getRandomNumber(),
        });
    }

    render() {

        const {colCount, pageSize,dataCount} = this.props;

        const {footerKey} = this.state;

        return (
            <Table.Row>

                <Table.HeaderCell key={footerKey} colSpan={colCount}>

                    <TablePagination
                        totalPages={Math.ceil((dataCount === undefined ? 1 : dataCount) / pageSize)}
                        getActivePages={(val) => this.handlePageClick(val)}
                    />

                </Table.HeaderCell>

            </Table.Row>


        )
    }
}
