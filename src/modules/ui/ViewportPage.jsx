import {BaseComponent} from './index.es6';
//import 'bootstrap';

/**
 * Top-level component that mapped to the root.
 */
export default class ViewportPage extends BaseComponent {

    render() {

        return (
            <div className='root'>
                <div className='content-wrapper container'>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );

    }

}