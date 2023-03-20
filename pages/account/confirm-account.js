import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
export default function ConfirmAccount(){
    <div>
            <Head>
                <title>SkyTrack-Account Success</title>
            </Head>
         <div class="bg-grey flex flex-column items-center justify-center vh-100">
        <div class="bg-white radius-10 box-658 flex flex-column justify-center items-center">
            <div class="width-100 flex flex-column items-center justify-center">
                <div class="relative">
                {/* <Image src="/assets/svgs/eclipse.svg" width={20} height={20}/> */}
                    <div class="svgs absolute">
                        {/* <Image src="/assets/svgs/particles.svg" width={20} height={20}/> */}
                    </div>
                    <div class="thumb absolute">
                    {/* <Image src="/assets/svgs/thumbs-up.svg" width={20} height={20}/> */}
                    </div>
                    
                </div>
                <h2 class="confirm-text text-center">Your account successfully created</h2>
                {/* <Link href="/account/home" class="primary-btn">Go to home</Link> */}
            </div>
        </div>
    </div>
    </div>
}