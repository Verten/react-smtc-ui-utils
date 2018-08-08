import React, {Component} from 'react'
import {PublicTables, PublicTableHeaders} from '../../../src';
import {Grid, Header} from "semantic-ui-react";
import renderLinks from "../others/CodeSource";
//import json from "json-loader!../data/doc.json";

export default class PropsOfTable extends Component {

    static propTypes = {}

    state = {
        tableDoc: [],
        headerDoc: [],
    }

    componentDidMount() {

        this.initTableDoc();
        this.initHeaderDoc();
    }

    initTableDoc() {
        const table = docJson["PublicTables.js"][0]["props"]
        const tableDoc = [];
        for (let [key, value] of Object.entries(table)) {
            //console.log(k, v)
            tableDoc.push(
                {
                    name: key,
                    description: value.description,
                    typeName: value.type.name,
                    typeValue: JSON.stringify(value.type.value, null, 2),
                }
            )

        }
        this.setState({
            tableDoc: tableDoc
        });
    }

    initHeaderDoc() {
        const table = docJson["PublicTableHeaders.js"][0]["props"]
        const tableDoc = [];
        for (let [key, value] of Object.entries(table)) {
            //console.log(k, v)
            if (key !== "tableElementType") {
                tableDoc.push(
                    {
                        name: key,
                        description: value.description,
                        typeName: value.type.name,
                    }
                )
            }

        }

        this.setState({
            headerDoc: tableDoc
        });
    }

    render() {

        const {tableDoc,headerDoc} = this.state;

        return (
            <div style={{margin: "2%"}}>

                <Grid>

                    <Grid.Row>
                        <Grid.Column width={'1'}>

                        </Grid.Column>
                        <Grid.Column width={'10'}>
                            {renderLinks('demo/src/data/doc.json',"Documentation file:")}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={'1'}>

                        </Grid.Column>
                        <Grid.Column width={'10'}>
                            <Header as={"h3"} content={"Props of PublicTables"}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={'1'}>

                        </Grid.Column>
                        <Grid.Column width={'10'}>
                            <PublicTables
                                data={tableDoc}
                                celled
                                compact
                                unstackable
                            >
                                <PublicTableHeaders
                                    header={'Name'}
                                    accessor={'name'}
                                />
                                <PublicTableHeaders
                                    header={'Type'}
                                    accessor={'typeName'}
                                />
                                <PublicTableHeaders
                                    header={'Description'}
                                    accessor={'description'}
                                />

                            </PublicTables>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={'1'}>

                        </Grid.Column>
                        <Grid.Column width={'10'}>
                            <Header as={"h3"} content={"Props of PublicTableHeaders "}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={'1'}>

                        </Grid.Column>
                        <Grid.Column width={'10'}>
                            <PublicTables
                                data={headerDoc}
                                celled
                                compact
                                unstackable
                            >
                                <PublicTableHeaders
                                    header={'Name'}
                                    accessor={'name'}
                                />
                                <PublicTableHeaders
                                    header={'Type'}
                                    accessor={'typeName'}
                                />
                                <PublicTableHeaders
                                    header={'Description'}
                                    accessor={'description'}
                                />

                            </PublicTables>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        )
    }
}


export const docJson = {
    "react-docgen /Users/rockychen/WebstormProjects/react-smtc-ui-utils/src/tables --pretty --resolver findAllComponentDefinitions -o doc.json": [
        {
            "description": "pagination footer example:\nusing data count and page size to calculate the pagination bar\n\n@type {{ colCount: *, pageSize: *, handlePageClick: *, dataCount: *}}",
            "displayName": "PaginationFooter",
            "methods": [
                {
                    "name": "handlePageClick",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "val",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "handlePageSizeChange",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "e",
                            "type": null
                        },
                        {
                            "name": "{value}",
                            "type": null
                        }
                    ],
                    "returns": null
                }
            ],
            "props": {
                "colCount": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "pageSize": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "number"
                            },
                            {
                                "name": "string"
                            }
                        ]
                    },
                    "required": true,
                    "description": ""
                },
                "handlePageClick": {
                    "type": {
                        "name": "func"
                    },
                    "required": true,
                    "description": ""
                },
                "dataCount": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "currentPage": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "onPageSizeChange": {
                    "type": {
                        "name": "func"
                    },
                    "required": true,
                    "description": ""
                },
                "footerMap": {
                    "type": {
                        "name": "array"
                    },
                    "required": false,
                    "description": ""
                }
            }
        },
        {
            "description": "",
            "displayName": "PaginationFooterSecondary",
            "methods": [
                {
                    "name": "handlePageClick",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "val",
                            "type": null
                        }
                    ],
                    "returns": null
                }
            ],
            "props": {
                "colCount": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "pageSize": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "handlePageClick": {
                    "type": {
                        "name": "func"
                    },
                    "required": true,
                    "description": ""
                },
                "dataCount": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "currentPage": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "footerMap": {
                    "type": {
                        "name": "array"
                    },
                    "required": false,
                    "description": ""
                }
            }
        },
        {
            "description": "",
            "displayName": "CustomizedFooter",
            "methods": [],
            "props": {
                "tableElementType": {
                    "defaultValue": {
                        "value": "\"CustomizedFooter\"",
                        "computed": false
                    },
                    "required": false
                }
            }
        },
        {
            "description": "",
            "displayName": "NoPaginationUserFooter",
            "methods": [],
            "props": {
                "colCount": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "footerMap": {
                    "type": {
                        "name": "array"
                    },
                    "required": false,
                    "description": ""
                }
            }
        }
    ],
    "PublicTableHeaders.js": [
        {
            "description": "",
            "displayName": "PublicTableHeaders",
            "methods": [],
            "props": {
                "header": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "number"
                            },
                            {
                                "name": "element"
                            }
                        ]
                    },
                    "required": true,
                    "description": "the title and header of this column"
                },
                "accessor": {
                    "type": {
                        "name": "string"
                    },
                    "required": true,
                    "description": "the key of an JSON array,"
                },
                "textAlign": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "\"left\"",
                                "computed": false
                            },
                            {
                                "value": "\"right\"",
                                "computed": false
                            },
                            {
                                "value": "\"center\"",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "align style only works on \"Table Header\","
                },
                "columnAlign": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "\"left\"",
                                "computed": false
                            },
                            {
                                "value": "\"right\"",
                                "computed": false
                            },
                            {
                                "value": "\"center\"",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "align style only works on \"Table Body\","
                },
                "collapsing": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop\nworks on the column"
                },
                "columnFormat": {
                    "type": {
                        "name": "func"
                    },
                    "required": false,
                    "description": "call back function pass cell data and row data\n <PublicTableHeaders\n                    columnFormat={(cellValue, rowObject) => console.log(cellValue, rowObject)}\n            />"
                },
                "customizeText": {
                    "type": {
                        "name": "func"
                    },
                    "required": false,
                    "description": "unlike columnFormat,\n  only re-write the header text instead of all the column\n  will works on structured table for re-writing headers.\n  <PublicTableHeaders\n                 customizeText={(cellValue, rowObject) => console.log(cellValue, rowObject)}\n             />"
                },
                "isHidden": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "set this column to hidden.\nFor instance, this column need a specific filter function, but does not need to show."
                },
                "filterContext": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "number"
                            }
                        ]
                    },
                    "required": false,
                    "description": "pass a dynamic text in your state\nwill always using String.include()\ncustomization filter function have not done yet"
                },
                "colAsCheckBox": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "this column will be shown as check box instead of text ,\nand check box value will according to your accessor"
                },
                "checkBoxStyle": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "\"slider\"",
                                "computed": false
                            },
                            {
                                "value": "\"radio\"",
                                "computed": false
                            },
                            {
                                "value": "\"toggle\"",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "using semantic check box types\nsuch as \"slider\", \"radio\", \"toggle\""
                },
                "rowSpan": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "number"
                            }
                        ]
                    },
                    "required": false,
                    "description": "for structured table, not done yet"
                },
                "selectable": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "Cell can be selected"
                },
                "onCellSelectCallBack": {
                    "type": {
                        "name": "func"
                    },
                    "required": false,
                    "description": "pass the cell and row data back eg:GonCellSelectCallBack={(cell,row)=>console.log(cell,row)}"
                },
                "tableElementType": {
                    "defaultValue": {
                        "value": "\"PublicTableHeaders\"",
                        "computed": false
                    },
                    "required": false
                }
            }
        }
    ],
    "PublicTables.js": [
        {
            "description": "@author:RockyChen\n\n@abstract:\n Universal table element\n\n@style:\n 3.unstackable: PropTypes.bool,\n 4.celled: PropTypes.bool,\n 5.basic: PropTypes.string,//very\n 6.collapsing:\n 7.compact :  a table may sometimes need to be more compact to make more rows visible at a time.\n 8.definition :A table may be formatted to emphasize a first column that defines a rows content.\n 9.inverted: A table's colors can be inverted.\n 10.fixed.bool: A table may sometimes need to be more padded for legibility.\n 11.singleLine: A table can specify that its cell contents should remain on a single line and not wrap.\n 12.sortable : A table may allow a user to sort contents by clicking on a table header.\n 13.stackable: A table can specify how it stacks table content responsively.\n\n\n\n@checkOptions:\n 1.checkOptions.showAllCheck=true // show \"check all\" button on the header, default = false;\n 2.checkOptions.checkOnSelect=true // unimplemented --- wait for spare time\n 3.checkOptions.checkedCallBackFunction = ()=>void(0)\n\n@pagination : boolean, if true, just show the pagination bar and re-calculate the data set\n\n@onRowClickFunc : call back function of click a row, give back the data of clicking row.",
            "displayName": "PublicTables",
            "methods": [
                {
                    "name": "handlePageSizeChange",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "value",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "filterDataByFilterContext",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "columnAccessor",
                            "type": null
                        },
                        {
                            "name": "filterContext",
                            "type": null
                        },
                        {
                            "name": "dataSet",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "modifyCheckedArray",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "id",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "TablePagination",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "ParamArr",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "handlePageClick",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "data",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "toggleCheckAll",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "accessor",
                            "type": null
                        },
                        {
                            "name": "dataSet",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "onRowSelectCallBack",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "column",
                            "type": null
                        }
                    ],
                    "returns": null
                },
                {
                    "name": "handleSort",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "clickedColumn",
                            "type": null
                        },
                        {
                            "name": "sortable",
                            "type": null
                        }
                    ],
                    "returns": null
                }
            ],
            "props": {
                "data": {
                    "type": {
                        "name": "array"
                    },
                    "required": true,
                    "description": "data format is JSON array\n[ {name:\"Tom\"},{age:16} ]"
                },
                "showAllCheck": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "first header cell shown as a select all check box"
                },
                "checkedCallBackFunction": {
                    "type": {
                        "name": "func"
                    },
                    "required": false,
                    "description": "pass the value of internal onCheckBoxChange\n<PublicTables data={dummy_data}  checkedCallBackFunction={(val) => console.log(val)}>"
                },
                "onRowSelectCallBack": {
                    "type": {
                        "name": "func"
                    },
                    "required": false,
                    "description": "pass the selected row data"
                },
                "pagination": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "bool"
                            },
                            {
                                "name": "enum",
                                "value": [
                                    {
                                        "value": "\"primary\"",
                                        "computed": false
                                    },
                                    {
                                        "value": "\"secondary\"",
                                        "computed": false
                                    }
                                ]
                            }
                        ]
                    },
                    "required": false,
                    "description": "2 different type of pagination bar"
                },
                "pageSize": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "10",
                                "computed": false
                            },
                            {
                                "value": "20",
                                "computed": false
                            },
                            {
                                "value": "50",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "currently only support hard-coded : 10 ,20 , 50"
                },
                "selectable": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "should combine with function onRowSelectCallBack\n<PublicTables selectable onRowSelectCallBack={(row)=>console.log(row)}>"
                },
                "sortable": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop\nusing Lodash sort method."
                },
                "color": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "\"red\"",
                                "computed": false
                            },
                            {
                                "value": "\"orange\"",
                                "computed": false
                            },
                            {
                                "value": "\"yellow\"",
                                "computed": false
                            },
                            {
                                "value": "\"olive\"",
                                "computed": false
                            },
                            {
                                "value": "\"green\"",
                                "computed": false
                            },
                            {
                                "value": "\"teal\"",
                                "computed": false
                            },
                            {
                                "value": "\"blue\"",
                                "computed": false
                            },
                            {
                                "value": "\"violet\"",
                                "computed": false
                            },
                            {
                                "value": "\"purple\"",
                                "computed": false
                            },
                            {
                                "value": "\"pink\"",
                                "computed": false
                            },
                            {
                                "value": "\"brown\"",
                                "computed": false
                            },
                            {
                                "value": "\"grey\"",
                                "computed": false
                            },
                            {
                                "value": "\"black\"",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop\nred,orange,yellow,olive,green,teal,blue,violet,purple,pink,brown,grey,black"
                },
                "tableSize": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "\"small\"",
                                "computed": false
                            },
                            {
                                "value": "\"large\"",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop\nsmall,large"
                },
                "unstackable": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "celled": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "basic": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "bool"
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "collapsing": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "compact": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "bool"
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "definition": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "inverted": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "fixed": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "padded": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "bool"
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "singleLine": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "stackable": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "verticalAlign": {
                    "type": {
                        "name": "enum",
                        "value": [
                            {
                                "value": "'bottom'",
                                "computed": false
                            },
                            {
                                "value": "'middle'",
                                "computed": false
                            },
                            {
                                "value": "'top'",
                                "computed": false
                            }
                        ]
                    },
                    "required": false,
                    "description": "semantic-ui builtin prop"
                },
                "structured": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": "not done yet"
                },
                "defaultCheckedIds": {
                    "type": {
                        "name": "array"
                    },
                    "required": false,
                    "description": "if we need default checked,pass an checkedIds array--(accessor of checkbox column )"
                },
                "rowHighLightFunction": {
                    "type": {
                        "name": "function"
                    },
                    "required": false,
                    "description": "set particular as green color to highlight, call this function and return true, the row will be green  ---> e.g. rowHighLightFunction(rowData){ return rowData.id === some_id }"
                },
                "fakePagination": {
                    "type": {
                        "name": "boolean"
                    },
                    "required": false,
                    "description": "Sometimes, we need to disable front-end pagination, and paginate it in back-end."
                },
                "onPageChangeCallBack": {
                    "type": {
                        "name": "boolean"
                    },
                    "required": false,
                    "description": "combine with fakePagination, use this call back value to set your database query"
                },
                "fakeDataSum": {
                    "type": {
                        "name": "number"
                    },
                    "required": false,
                    "description": "combine with fakePagination, use this set your total sum"
                },
                "rowRenderCallback": {
                    "type": {
                        "name": "function"
                    },
                    "required": false,
                    "description": "sometimes, we need to re-render the row,rowRenderCallback={(row, index) => this.rowRender(row, index)}"
                },
                "defaultResponsiveParam": {
                    "type": {
                        "name": "object"
                    },
                    "required": false,
                    "description": "we can set responsive param to re-render the table body"
                }
            }
        },
        {
            "description": "",
            "displayName": "PublicTableFooter",
            "methods": [],
            "props": {
                "header": {
                    "type": {
                        "name": "union",
                        "value": [
                            {
                                "name": "string"
                            },
                            {
                                "name": "number"
                            }
                        ]
                    },
                    "required": true,
                    "description": ""
                }
            }
        },
        {
            "description": "",
            "displayName": "ColumnCheckBox",
            "methods": [
                {
                    "name": "toggle",
                    "docblock": null,
                    "modifiers": [],
                    "params": [],
                    "returns": null
                }
            ],
            "props": {
                "id": {
                    "type": {
                        "name": "any"
                    },
                    "required": false,
                    "description": ""
                },
                "checked": {
                    "type": {
                        "name": "bool"
                    },
                    "required": true,
                    "description": ""
                },
                "getCallBackId": {
                    "type": {
                        "name": "func"
                    },
                    "required": true,
                    "description": ""
                },
                "checkBoxStyle": {
                    "type": {
                        "name": "string"
                    },
                    "required": false,
                    "description": ""
                }
            }
        }
    ],
    "/Users/rockychen/WebstormProjects/react-smtc-ui-utils/src/tables/TablePagination.js": [
        {
            "description": "Pagination Component for tables\n\n@Author: Rocky Chen",
            "displayName": "TablePagination",
            "methods": [
                {
                    "name": "handlePaginationChange",
                    "docblock": null,
                    "modifiers": [],
                    "params": [
                        {
                            "name": "e",
                            "type": null
                        },
                        {
                            "name": "{activePage}",
                            "type": null
                        }
                    ],
                    "returns": null
                }
            ],
            "props": {
                "totalPages": {
                    "type": {
                        "name": "number"
                    },
                    "required": true,
                    "description": ""
                },
                "getActivePages": {
                    "type": {
                        "name": "func"
                    },
                    "required": true,
                    "description": ""
                },
                "boundaryRange": {
                    "type": {
                        "name": "number"
                    },
                    "required": false,
                    "description": ""
                },
                "showEllipsis": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": ""
                },
                "showFirstAndLastNav": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": ""
                },
                "showPreviousAndNextNav": {
                    "type": {
                        "name": "bool"
                    },
                    "required": false,
                    "description": ""
                },
                "displaySize": {
                    "type": {
                        "name": "string"
                    },
                    "required": false,
                    "description": ""
                },
                "currentPage": {
                    "type": {
                        "name": "number"
                    },
                    "required": false,
                    "description": ""
                }
            }
        }
    ]
};