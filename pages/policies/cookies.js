import Layout from '../../layouts/default';
import Head from 'next/head';

export default function Cookies() {
    return(
        <Layout>
            <Head>
                <title>Cookie Policy | sny.nu</title>
            </Head>
            <div className="lg:container mx-auto  w-full lg:px-12 antialiased max-w-xl px-6 ">
                <h1 className="text-3xl  font-extrabold leading-10 sm:text-4xl sm:leading-none md:text-4xl xl:text-5xl mb-4">
                    Cookie Policy sny<span className="text-green-500">.</span>nu
                </h1>
                <p>This cookie policy (&quot;Policy&quot;) describes what cookies are and how and they&#039;re being used by the 
                    <a target="_blank" rel="nofollow" href="https://sny.nu">sny.nu</a> website (&quot;Website&quot; or &quot;Service&quot;) 
                    and any of its related products and services (collectively, &quot;Services&quot;). This Policy is a legally binding agreement 
                    between you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and this Website operator (&quot;Operator&quot;, &quot;we&quot;, 
                    &quot;us&quot; or &quot;our&quot;). You should read this Policy so you can understand the types of cookies we use, 
                    the information we collect using cookies and how that information is used. It also describes the choices available to you regarding 
                    accepting or declining the use of cookies. For further information on how we use, store and keep your personal data secure, see our 
                    <a target="_blank" rel="nofollow" href="https://sny.nu/policies/privacy">privacy policy</a>. This cookie policy was created with 
                    the help of the <a target="_blank" href="https://www.websitepolicies.com/cookie-policy-generator">cookie policy generator</a>.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    What are cookies?
                </h2>
                <p>Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. 
                    They are widely used to remember you and your preferences, either for a single visit (through a &quot;session cookie&quot;) or 
                    for multiple repeat visits (using a &quot;persistent cookie&quot;).</p>
                <p>Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser.</p>
                <p>Persistent cookies are used to remember your preferences within our Website and remain on your desktop or mobile device even 
                    after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting 
                    the Website and Services.</p>
                <p>Cookies may be set by the Website (&quot;first-party cookies&quot;), or by third parties, such as those who serve content or provide 
                    advertising or analytics services on the Website (&quot;third party cookies&quot;). These third parties can recognize you when you 
                    visit our website and also when you visit certain other websites. You may learn more about cookies and how they work in this 
                    <a target="_blank" href="https://www.websitepolicies.com/blog/cookies">guide</a>.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    What type of cookies do we use?
                </h2>
                <h3>Functionality cookies</h3>
                <p>Functionality cookies let us operate the Website and Services in accordance with the choices you make. 
                    For example, we will recognize your username and remember how you customized the Website and Services during future visits.</p>
                <h3>Analytical cookies</h3>
                <p>These cookies enable us and third party services to collect aggregated data for statistical purposes on how our visitors use the Website. 
                    These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience 
                    of the Website.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    What are your cookie options?
                </h2>
                <p>If you don't like the idea of cookies or certain types of cookies, you can change your browser's settings to delete cookies 
                    that have already been set and to not accept new cookies. To learn more about how to do this, visit 
                    <a target="_blank" href="https://www.internetcookies.org">internetcookies.org</a></p>
                <p>Please note, however, that if you delete cookies or do not accept them, you might not be able to use all of the features 
                    the Website and Services offer.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    Changes and amendments
                </h2>
                <p>We reserve the right to modify this Policy or its terms relating to the Website and Services at any time, effective upon 
                    posting of an updated version of this Policy on the Website. When we do, we will revise the updated date at the bottom of this page. 
                    Continued use of the Website and Services after any such changes shall constitute your consent to such changes.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    Acceptance of this policy
                </h2>
                <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services 
                    you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use 
                    the Website and Services.</p>
                
                <h2 className="text-2xl  font-extrabold leading-10 sm:text-2xl sm:leading-none md:text-2xl xl:text-3xl my-4">
                    Contacting us
                </h2>
                <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to our use 
                    of cookies, you may do so via the <a target="_blank" rel="nofollow" href="http://info@sny.nu">contact form</a>.</p>
                
                <p>This document was last updated on March 10, 2021</p>
            </div>
        </Layout>
    )
}