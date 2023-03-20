import Head from 'next/head'
import Link from 'next/link'

export default function Recover(){
    return (
        <div>
             <Head>
                <title>SkyTrack-Recover password</title>
            </Head>
            <div class="bg-grey flex flex-column items-center justify-center vh-100">
            <div class="bg-white radius-10 box-658 flex flex-column justify-center items-center">
            <div class="width-100 flex flex-column items-center justify-center">
                <h2 class="sky-hed text-center">Skytrack Pro</h2>
                <div class="w-100 form-container flex flex-column">
                    <p class="sub-hed text-center">Recover</p>
                    <label for="email">Email Address</label>
                    <input class="mb-0" type="text" name="email" placeholder="example@gmail.com"/>
                    <Link href="/account/recover"> <button class="mt-25">Reset Your Password</button></Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}