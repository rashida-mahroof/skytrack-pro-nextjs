import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function Login(){
    return(
        
        
        <div>
            <Head>
                <title>SkyTrack-Login</title>
            </Head>
            
            <div class="vh-100">
        <div class="row">
            <div class="col-md-4 bg-white">
                <div class="abslt">
                    <h2 class="sky-hed text-center">Skytrack Pro</h2>
                    <div class="form-container flex flex-column">
                        <p class="sub-hed text-center">Login</p>
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
                        <label for="email">Email Address</label>
                        <input type="text" name="email" placeholder="example@gmail.com"/>
                        <label for="password">Password</label>
                       <div class="relative">
                            <input type="text" name="password" id="myInput1" placeholder="Enter Your Password"/>
                           <div class="absolute show-icon-box">
                                <div onclick="myPassword(1)" id="closeEye1"><i class="fa fa-eye-slash"></i></div>              
                                {/* <div onclick="myPassword(1)" id="openEye1" style="display: none;"><i class="fa fa-eye"></i></div> */}
                                
                           </div>
                       </div>
                       <div class="rere flex space-between items-center ">
                            <div class="flex items-center justify-center">
                                <input type="checkbox" name="remember" id=""/>
                                <label class="remember" for="remember">Remember me</label>
                                 
                            </div>
                            <div>
                            <Link class="reset" href="/account/recover">Reset Password?</Link> 

                            </div>
                       </div>
                       <button>Login</button>
                       <span class="new text-center">Don't have account yet? 
                        <Link href="/account/signup">New Account</Link> 
                       </span>
                    </div>
                </div>
            </div>
            <div class="col-md-8 bg-grey">
                <div class="right-img flex items-center justify-center width-100">
                    <Image  src='/assets/images/login-vector.png' width={450} height={450}/>
                </div>
            </div>
    
        </div>
    </div>
        </div>
    )
}