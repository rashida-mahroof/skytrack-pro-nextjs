import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
export default function Signup(){
    return(
       <div>
         <Head>
                <title>Skytrack-Signup</title>
            </Head>
         <div class="vh-100">
        <div class="row">
            <div class="col-md-4 bg-white">
                <div class="abslt">
                    <h2 class="sky-hed text-center">Skytrack Pro</h2>
                    <div class="form-container flex flex-column">
                        <p class="sub-hed text-center">SignUp</p>
                        <div class="login-with flex flex-row space-between width-100">
                        <div class="social1 flex flex-row items-center justify-center">
                                <Image src="/assets/icons/google-icon.png" width={20} height={20}/>
                                <p>Google</p>
                            </div>
                            <div class="social1 flex flex-row items-center justify-center">
                                <Image src="/assets/icons/facebook-icon.png" width={20} height={20}/>
                                <p>FaceBook</p>
                            </div>
                        </div>
                        <span class="line-dec width-100 text-center">Or</span>
                        <label for="email">Full Name</label>
                        <input type="text" name="fullname" placeholder="Enter Your Fullname"/>
                        <label for="fullname">Email Address</label>
                        <input type="text" name="email" placeholder="example@gmail.com"/>
                        <label for="username">User Name</label>
                        <input type="text" name="username" placeholder="Enter Username"/>
                        <label for="password">Password</label>
                       <div class="relative">
                            <input type="text" name="password" id="myInput2" placeholder="Enter Your Password"/>
                           <div class="absolute show-icon-box">
                                <div onclick="myPassword(2)" id="closeEye2"><i class="fa fa-eye-slash"></i></div>              
                                {/* <div onclick="myPassword(2)" id="openEye2" style="display: none;"><i class="fa fa-eye"></i></div> */}
                                
                           </div>
                       </div>
                       <div class="rere flex space-between items-center ">
                            <div class="flex">
                                <input class="m-t-5" type="checkbox" name="policy" id=""/>
                                <label class="remember" for="policy">By creating an account you agree to the <span>terms of use</span> and our <span>privacy policy.</span></label>
                                 
                            </div>
                            
                       </div>
                       <Link href="/account/confirm-account"><button>Create Account</button></Link>
                       <span class="new text-center">Already have an account?  <Link href="/account/login">Login</Link> </span>
                    </div>
                </div>
            </div>
            <div class="col-md-8 bg-grey">
                <div class="right-img flex items-center justify-center width-100">
                <Image  src='/assets/images/signup-vector.png' width={450} height={400}/>
                </div>
            </div>
    
        </div>
        </div>
       </div>
    )
}