import React from 'react'
import '../Resources/default-layout.css'
import { Dropdown, Menu} from 'antd';
import { useNavigate } from 'react-router-dom';


function DefaultLayout (props) {
   const user =JSON.parse(localStorage.getItem('MoneyManager-users'))
const navigate =useNavigate()
   const menu = (
      <Menu
        items={[
          {
            key: '1',
            label: (
               <li onClick={()=>{
                 localStorage.removeItem('MoneyManager-users')
               navigate("/login");
               }}>LOG OUT </li>
            
            ),
          },
        ]}
      />
    );
return (
    <div className='layout'> 


    <div className='header d-flex justify-content-between align-items-center'> 
     <div>
        <h1 className="logo">Money-Manager </h1>
     </div>
     <div>
     <Dropdown overlay={menu} placement="bottomLeft">
        <button className='primary'> {user.name}</button>
      </Dropdown>
     </div>
    </div>

    <div className='content'> 
    {props.children}
</div>

</div>
)

}
export default DefaultLayout 