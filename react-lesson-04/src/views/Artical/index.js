import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Artical extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/* 显式传参query、动态路由/:id */}
                    <li><Link to="/artical/1?sort=name">文章一</Link></li>
                    {/* 隐式传参state */}
                    <li><Link to={{
                        pathname: "/artical/2",
                        // search: "?sort=name",
                        // hash: "#the-hash",
                        state: { fromDashboard: true }
                    }}>文章二</Link></li>
                    
                </ul>
            </div>
        )
    }
}
// 埋点请求发送数据：
// 1.ajax
// 2.let img = new Image(); img.src="xxx";
// 3.navigator.sendBeacon(url,data)