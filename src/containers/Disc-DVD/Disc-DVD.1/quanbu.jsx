import React,{Component} from 'react'
import './css.less'
import { reqAlbumList } from "../../../api/index";
 class Quanbu extends Component{
  state={
    albumList:[]
  }
  componentDidMount(){
    this.getAlbumList()
  }
  getAlbumList = async()=>{
    let data = await reqAlbumList()
    console.log(data)
    const { code, albums } = data
  if (code===200) {
    this.setState({ albumList: albums })
  }
}
  render(){
    return (
      <div >
          <ul className="cvrlst">
            <li>
              <div className="cover"><img src="http://p3.music.126.net/R5hmBoVZt0I56BPiVic1aA==/109951164601146483.jpg?param=130y130"></img>
              <a href="/album?id=84698311" className="msk" title="Yummy"></a>
              <a href="#" className="icon-play f-alpha f-fr" title="播放" data-res-type="19" data-res-id="84698311" data-res-action="play"></a>
              </div>
              <p className="dec"><a>Yummy</a></p>
              <p className="thide"><span><a>Justin Bieber</a></span></p>
            </li>
          </ul>
          <div className="page">
            <a className="zbtn znrv">上一页</a>
            <a className="zpgi">1</a>
            <a className="zpgi">2</a>
            <a className="zpgi">3</a>
            <a className="zpgi">4</a>
            <a className="zbtn znxt">下一页</a>
          </div>
      </div>
    )
  }
}
export default Quanbu