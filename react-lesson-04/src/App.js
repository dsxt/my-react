import React, { Component } from 'react'

import { Button,Pagination  } from 'antd'

import { CartList } from './components'
import { BlogList } from './components'
import { Artical,ArticalDetail,NotFount } from './views'

// NavLink和Link的区别：NavLink加了一个选中的类名，可通过activeClassName属性设置
import { 
    Route,
    NavLink as Link,
    Redirect,
    // Switch
} from 'react-router-dom'

class App extends Component {
    constructor(){
        super()
        this.state = {
            current:1,
            pageSize:10
        }
    }
    onShowSizeChange = (current, pageSize)=>{
        console.log(current, pageSize);
    }
    render() {
        return (
            <div>
                <Button type="primary">测试antd</Button>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={this.onShowSizeChange}
                    defaultCurrent={1}
                    total={500}
                />
                <ul>
                    <li><Link to="/cart">购物车</Link></li>
                    <li><Link to="/blog">内容列表</Link></li>
                    <li><Link to="/artical">文章</Link></li>
                </ul>
                {/* Switch只匹配第一个(非完全匹配),exact完全匹配 */}
                {/* <Switch> */}
                {/* component和render效果类似，component的优先级大于render，render写法是一个方法，参数是路由信息 */}
                    {/* <Route component={CartList} path="/cart" /> */}
                    <Route render={(props)=><CartList {...props} />} path="/cart" />

                    <Route component={BlogList} path="/blog" />
                    <Route component={Artical} path="/artical" exact />
                    <Route component={ArticalDetail} path="/artical/:id" />
                    <Route component={NotFount} path="/404" />
                    <Redirect to="/cart" from="/" exact />
                    <Redirect to="/404" />
                {/* </Switch> */}
            </div>
        )
    }
}
export default App