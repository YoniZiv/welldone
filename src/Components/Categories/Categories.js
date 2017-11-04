import React from "react";
import Category from "../Category/category";
import {Button, Grid, Row} from "react-bootstrap";
import {remove} from 'lodash';
import {connect} from "react-redux";
import {addNewCategory} from "../../Redux/Actions/categoriesActions";
import * as _ from "lodash";
import {Growl} from "primereact/components/growl/Growl";
import {showGrowl} from "../../common/growlMessage";

class Categories extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            // CategoriesList: Object.keys(props.places) || []

        }
    }

    // componentWillMount() {
    //     this.props.addNewCategory('yoni')
    // }

    DeleteCategory = (categoryName) => {
        const { CategoriesList } = this.state;
        console.log('before' , categoryName)
        // remove(CategoriesList, (category) =>  )
        // const removeIndex = CategoriesList.indexOf(e.target);
        // const newList = CategoriesList.splice(removeIndex,1);
        // this.setState({
        //     CategoriesList: newList
        // });
        // console.log('after' , CategoriesList);
    }

    showGrowl = (growlMessage) => {
        growlMessage ?
            this.setState({
                messages: [growlMessage]
            }) :
            this.setState({
                messages: []
            })
    }

    NewCategory = () => {
       this.props.addNewCategory('');
    }

    render() {
        return (
            <section className="categories">
                <Growl value={this.state.messages}></Growl>

                <Button onClick={ this.NewCategory} className="addBtn"> + </Button>
                <Grid>
                    <Row>
                        { this.props.categories.map( (categoryName) => {
                            return (
                              <Category key={"category_" + categoryName} name={ categoryName } showGrowl={ this.showGrowl } />
                            );
                        })}
                    </Row>
                </Grid>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});

export default connect(mapStateToProps,{ addNewCategory })(Categories)