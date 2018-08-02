<!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu" id="nav-menu">
          <!-- <script> document.getElementById("nav-menu").style.backgroundColor='#2A3F54';</script> -->
            <nav>
              <div class="nav toggle" >
                <a id="menu_toggle" onclick="hideImage()"><i class="fa fa-bars" id="test" ></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="resources/images/profile_pic.png" alt="">Administrator
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right" id="menu2">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>
				<li role="presentation" class="dropdown">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa  fa-paint-brush"></i>
                  
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li style="background-color:dimgrey;color:white;">
                      <a>
                         <span>
                          <span onclick="changeTheme('gray')"><center > Theme 1</center></span>
                       
                        </span>
                      </a>
                    </li>
                    <li style="background-color:black;">
                      <a>
                     
                        <span>
                          <span onclick="changeTheme('black')"><center>Theme 2</center></span>
                       
                        </span>
                       
                      </a>
                    </li>
                    <li  style="background-color:#2A3F54">
                      <a>
                          <span>
                          <span onclick="changeTheme('blue')"><center>Theme 3</center></span>
                       
                        </span>
                      </a>
                    </li>
                   </ul>
                      <!-- <div class="text-center">
                        <a>
                          <strong></strong>
                          <i class="fa fa-close"></i>
                        </a>
                      </div> -->
                    </li>
                  </ul>
             
            </nav>
          </div>
        </div>
        <!-- /top navigation -->