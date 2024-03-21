import "./App.css"
import iconList1 from "./assets/icon-list1.svg"
import iconList2 from "./assets/icon-list2.svg"
import iconList3 from "./assets/icon-list3.svg"
import iconList4 from "./assets/icon-list4.svg"
import iconList5 from "./assets/icon-list5.svg"
import iconList6 from "./assets/icon-list6.svg"
import img1 from "./assets/img1.svg"

const App = () => {

  return (

    <>
    

      <div className="container-all">

          <div className="container-cima-all">

              <div className="container-esquerda">

              <div className="h1-content">

              <h1 className="h1-content-title">Design. Think.</h1>
              <h1 className="h1-content-title">Solve. Develop.</h1>

              </div>

              <p className="p-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. 
              </p>

              <button>
                Get started
              </button>

          </div>

          <div className="container-direita">

              <div className="list1">

                  <div className="list-content">

                      <div className="container-icon1">

                        <img src={iconList1} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">168</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

                  <div className="list-content">

                      <div className="container-icon2">

                        <img src={iconList2} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">425+</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

                  <div className="list-content">

                      <div className="container-icon3">

                        <img src={iconList3} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">316</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

              </div>

              <div className="list2">

                  <div className="list-content">

                      <div className="container-icon4">

                        <img src={iconList4} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">Title 1</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

                  <div className="list-content">

                      <div className="container-icon5">

                        <img src={iconList5} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">Title 2</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

                  <div className="list-content">

                      <div className="container-icon6">

                        <img src={iconList6} className="icons-list"/>

                      </div>

                      <div className="content-h1-list">

                          <h1 className="h1-list">Title 3</h1>
                          <p className="phrase-list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                      </div>

                  </div>

              </div>

          </div>

        </div>

            <div className="container-baixo">

              <div className="card-bottom-all">

                  <div className="card1">

                      <img src={img1} className="img1-card"/>
                      <h1 className="h1-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                  </div>

                  <div className="card1">

                      <img src={img1}/>
                      <h1 className="h1-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                  </div>

                  <div className="card1">

                      <img src={img1}/>
                      <h1 className="h1-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                  </div>

                  <div className="card1">

                      <img src={img1} className="img2-card"/>
                      <h1 className="h1-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                  </div>

              </div>

            </div>

      </div>

    </>

  )

}

export default App
