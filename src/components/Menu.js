import '../css/menu.css'
function Menu(){
    return (
        <div class="dropdown">
            <li class=" even">
                <button class="mainmenubtn">Main Menu</button>
                <li class=" odd">
                    <div class="dropdown-child">
                        <li class=" even">
                        <a href="http://wwww.tudominio.com/page1.html">Sub Menu 1</a>
                        <a href="http://wwww.tudominio.com/page2.html">Sub Menu 2</a>
                        <a href="http://wwww.tudominio.com/page3.html">Sub Menu 3</a>
                        <a href="http://wwww.tudominio.com/page4.html">Sub Menu 4</a>
                        <a href="http://wwww.tudominio.com/page5.html">Sub Menu 5</a>
                        </li>
                    </div>
                </li>
            </li>
        </div>
    )
}

export default Menu