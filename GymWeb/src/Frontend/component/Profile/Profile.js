import React,{useContext,useState,useEffect} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import img from '../../IMG/spatan.jpg'
import './Profile.css'
import { AuthContext } from '../../../Backend/Context/AuthContext';
import Authservice from '../../../Backend/Service/AuthService'
import notfound from '../404page/404'
export default function Profile(){
    const {isAuthenticated,user,setisAuthenticated,setUser,info,setinfo} = useContext(AuthContext); 
    const [lk,setlk]=useState('');
    const [BMI,setBMI]=useState('');
    // useEffect(()=>{
    //    setlk(info.Bmi)
    //    console.log(lk)
       
    // }, [info.Bmi, lk])
    function LK(){
        var Bmi=info.Bmi[info.Bmi.length - 1] 
        if(Bmi.Bmi<18.5)
            return(
                <div>
                    <div class="row">
                        <div class="col-6">
                            <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action badge badge-primary f20" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Chọn thực phẩm khôn ngoan</a>
                            <a class="list-group-item list-group-item-action badge badge-secondary f20" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Ăn 5 – 6 bữa mỗi ngày, thay vì 3 bữa như thông thường</a>
                            <a class="list-group-item list-group-item-action badge badge-success f20" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Nạp vào cơ thể nhiều Calories hơn lượng Calories bạn tiêu thụ hằng ngày</a>
                            <a class="list-group-item list-group-item-action badge badge-info f20" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Bổ sung nước cho cơ thể</a>
                            <a class="list-group-item list-group-item-action badge badge-danger f20" id="list-settingss-list" data-toggle="list" href="#list-settingss" role="tab" aria-controls="settings">Nghỉ ngơi hợp lý</a>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Chọn thực phẩm để đưa vào trong thực đơn tăng cân cũng là một yếu tố quan trọng mà bạn cần lưu tâm. 
                                                                                                                                    4 nhóm chất bạn cần chú ý để tăng cường là:Protein, tinh bột, chất béo, vitamin và khoáng chất</div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Đừng cố gắng ăn quá no, quá nhiều trong 1 bữa. Như vậy sẽ rất ngán. Bao tử cũng khó tiêu hóa, gây nặng bụng, 
                                                                                                                                khó chịu.Bạn chỉ cần ăn thêm 3 bữa phụ giữa các bữa chính.Nếu bạn không có thời gian để nấu nướng hay chuẩn bị thức ăn, bạn có thể dùng thực phẩm bổ sung như sữa tăng cân.
                                                                                                                                Serious Mass, True Mass, Pro Complex Gainer hay các sản phẩm hỗ trợ tương tự sẽ cung cấp đầy đủ dinh dưỡng cho bữa phụ của bạn. Những thức uống dinh dưỡng này có giá trị dinh dưỡng không thua gì 1 bữa ăn , 
                                                                                                                                có thể dễ dàng pha chế và dùng chỉ trong 5 phút.Ngoài ra, cung cấp nước cho cơ thể là rất cần thiết. Hãy uống nhiều nước. Nước lọc là tốt nhất.</div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Đây là nguyên tắc cơ bản, cực kỳ quan trọng và bắt buộc phải thực hiện nếu bạn muốn tăng cân. Nếu bạn vẫn chưa biết bạn cần bao nhiêu calories mỗi ngày để tăng cân.Có nhiều công thức để ước tính lượng calories bạn tiêu thụ hằng ngày. Tuy nhiên, tôi vừa học được từ 1 huấn luyện viên thể hình ở Mỹ công thức đơn giản như sau:<br></br>Cân nặng của bạn (kg) x 44 = lượng calories tiêu thụ mỗi ngày.<br></br>Ví dụ: Bạn 60 kg. Lượng Calories bạn tiêu thụ hằng ngày = 60 x 44 = 2640 calories. Như vậy, để bắt đầu tăng cân, bạn cần ăn để nạp vào cơ thể nhiều hơn lượng calories cần thiết này.Để nạp nhiều calories hơn, hãy ăn nhiều thức ăn giàu dinh dưỡng hơn mỗi ngày.</div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Nếu muốn tăng cân, cảm giác thèm ăn cũng là điều quan trọng, và rượu vang có thể giúp ích trong vấn đề này. Một ly rượu vang nhỏ trước bữa tối sẽ giúp ta ăn nhiều hơn. Ngoài ra, uống nước nhiều hay uống đủ lượng nước cần cho cơ thể trong một ngày cũng rất tốt cho sức khỏe, tuy nhiên cần tránh uống nước trước hay trong bữa ăn để tránh tình trạng chán ăn.</div>
                            <div class="tab-pane fade" id="list-settingss" role="tabpanel" aria-labelledby="list-settingss-list">Giấc ngủ rất quan trọng, nhất là khi bạn muốn tăng cân trong khi đa số người muốn tăng cân lại thường xuyên thức khuya và ngủ rất ít. Bạn cần phải thay đổi. Giấc ngủ là lúc cơ thể bạn nghỉ ngơi, phục hồi và phát triển. Bạn hãy đảm bảo rằng mình ngủ đủ 8 tiếng mỗi đêm và tốt nhất là đi ngủ trước 11h.</div>
                            </div>
                        </div>
                        </div>
                </div>
            )
        if(Bmi.Bmi>=18.5&&Bmi.Bmi<24.9)
            return(
                <div>Chỉ sô BMi cân đối tiếp tục giữ vững chế độ ăn uống và luyện tập</div>
            )
            if(Bmi.Bmi>=25)
                return(
                <div>
                   <div class="row">
                        <div class="col-4">
                            <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action badge badge-primary f20" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><span class=" ">Thay thế các loại thịt bằng cá</span></a>
                            <a class="list-group-item list-group-item-action badge badge-secondary f20" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Hạn chế tinh bột và chất béo</a>
                            <a class="list-group-item list-group-item-action badge badge-success f20" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Ăn trái cây khi có cảm giác thèm ăn</a>
                            <a class="list-group-item list-group-item-action badge badge-info f20" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Chú trọng khâu chọn lựa và chế biến thực phẩm</a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Cá sẽ cung cấp đầy đủ chất dinh dưỡng cho cơ thể mà không gây béo, thậm chí mỡ cá cũng không hề gây béo. Vì thế, bạn hãy đưa cá vào nhiều bữa trong thực đơn giảm cân của mình và nhớ là nên chế biến theo kiểu cá luộc, hấp hoặc kho nhạt, hạn chế ăn gỏi cá sống hoặc cá chiên.</div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Muốn giảm cân cần phải giảm lượng tinh bột và chất béo trong thực đơn hàng ngày. Bởi tinh bột và chất béo là nhóm thực phẩm khiến bạn tăng cân nhanh chóng và béo phì. Vì vậy thực đơn giảm cân nhất thiết phải giảm lượng nhóm thực phẩm này bạn nhé.</div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Trái cây không chứa chất béo, ít năng lượng lại giàu chất xơ và vitamin có lợi cho cơ thể. Ăn trái cây trong bữa phụ hay khi bạn có nhu cầu thèm ăn sẽ giúp bạn xóa tan cảm giác đói mà không lo tăng cân và tốt cho sức khỏe. Trái cây cũng có nhiều dưỡng chất hỗ trợ đắc lực cho quá trình giảm cân của bạn.</div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Chọn thực phẩm là khâu rất quan trọng trong quá trình giảm cân. 
                                                                                                                                Tốt nhất bạn nên lên thực đơn hằng ngày sau đó hẳn đi siêu thị/chợ để tránh mua quá nhiều. 
                                                                                                                                Nên chọn thực phẩm tươi sống và sử dụng trong ngày.Khâu chế biến thực phẩm cũng rất quan trọng, tốt nhất là hạn chế sử dụng dầu mỡ, sử dụng món hấp, luộc thay cho món chiên xào. 
                                                                                                                                Các món luộc và hấp sẽ giúp người béo phì hạn chế hấp thụ chất béo ở mức tối đa và đồng thời cách chế biến này giúp những chất dinh dưỡng sẽ không bị mất đi hoặc chuyển đổi thành những chất có hại cho cơ thể so với cách chế biến món ăn theo kiểu chiên xào.</div>
                            </div>
                        </div>
                        </div>
                </div>)
    }
    
     const isauth=()=>{
        var Bmi=info.Bmi[info.Bmi.length - 1] 
         return(<div className="container">
         <div className="row py-5">
                 <div className="col-md-12 mx-auto">
                 
                     {/* <!-- name and avatar --> */}
                     <div className="bg-white shadow rounded ">            
                         <div className="px-4 pt-0 pb-4 cover">
                             <div className="media align-items-end profile-head">
                             
                                 {/* <!-- avatar image --> */}
                                 <div className="profile mr-3">
                                     <img src={img} alt="avatar" className="rounded mb-2 img-thumbnail avatar"/>
 
                                   
                                     
                                 </div>
                                 <div className="media-body mb-5 text-white">
                                     {/* <!-- name of user  -->
                                     <!-- -> change here --> */}
                                     <h4 className="mt-0 mb-0">{user.username}</h4>
                                     {/* <!-- Address --> */}
                                     <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2 "></i></p>
                                 </div>
                                 
                             </div>
                         </div>
                     </div>
                     {/* end avatar and name */}
             {/* <!-- show height weight and bmi  --> */}
                     <div className="bg-light p-4 d-flex justify-content-end text-center">
                         <ul className="list-inline mb-0">
                             <li className="list-inline-item">
                                 <h5 className="font-weight-bold mb-0 d-block">{Bmi.height}m</h5><small className="text-muted"> 
                                         <img className="fas fa-image mr-1"></img>Height</small>
                             </li>
                         <li className="list-inline-item">
                                         <h5 className="font-weight-bold mb-0 d-block">{Bmi.weight}kg</h5><small className="text-muted"> 
                                         <img className="fas fa-user mr-1"></img>Weight</small>
                             </li>
 
                             <li className="list-inline-item">
                                         <h5 className="font-weight-bold mb-0 d-block">{Bmi.Bmi}</h5><small className="text-muted"> 
                                         <img className="fas fa-user mr-1"></img>BMI</small>
                             </li>
                         </ul>
                     </div>              
 
 
                         {/* <!-- user profile  --> */}
                         <div className="px-4 py-3">
                             <h5 className="mb-0 advice">Advice</h5>
                             <div className="p-4 rounded shadow-sm bg-light">
                                    {LK()}
                             </div>
                         </div>
                     
                 
             </div>
         </div>
     </div> )
     }
   
    return(
        isAuthenticated? isauth():notfound()
     )
   
}