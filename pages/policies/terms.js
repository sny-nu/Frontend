import DefaultLayout from '../../layouts/default';
import Head from 'next/head';
import H3 from '../../components/ui/text/h3';
import H4 from '../../components/ui/text/h4';
import NormalText from '../../components/ui/text/normalText';
import Container from '../../components/ui/container';

export default function Terms() {
    return(
        <DefaultLayout>
            <Head>
                <title>Terms of Services | sny.nu</title>
            </Head>
            <Container>
                <H3 className="mb-4">
                    Terms of Services sny<span className="text-green-500">.</span>nu
                </H3>
                <NormalText>These terms and conditions (&quot;Agreement&quot;) set forth the general terms and conditions of your use of 
                    the <a target="_blank" rel="nofollow" href="https://sny.nu">sny.nu</a> website (&quot;Website&quot; or &quot;Service&quot;) 
                    and any of its related products and services (collectively, &quot;Services&quot;). This Agreement is legally binding between 
                    you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and this Website operator (&quot;Operator&quot;, &quot;we&quot;, 
                    &quot;us&quot; or &quot;our&quot;). By accessing and using the Website and Services, you acknowledge that you have read, understood, 
                    and agree to be bound by the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal 
                    entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms &quot;User&quot;, 
                    &quot;you&quot; or &quot;your&quot; shall refer to such entity. If you do not have such authority, or if you do not agree with the 
                    terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services. 
                    You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically 
                    signed by you, and it governs your use of the Website and Services. This terms and conditions policy was created with the help 
                    of the <a target="_blank" href="https://www.websitepolicies.com/terms-and-conditions-generator">terms and conditions generator</a>.</NormalText>

                <H4 className="my-4">
                    Age requirement
                </H4>
                <NormalText>You must be at least 13 years of age to use the Website and Services. By using the Website and Services and by agreeing to this 
                    Agreement you warrant and represent that you are at least 13 years of age.</NormalText>
                
                <H4 className="my-4">
                    Links to other resources
                </H4>
                <NormalText>Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, 
                    directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, 
                    unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, 
                    any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, 
                    products, services, and content of any other third parties. You should carefully review the legal statements and other conditions 
                    of use of any resource which you access through a link on the Website and Services. Your linking to any other off-site resources 
                    is at your own risk.</NormalText>
                
                <H4 className="my-4">
                    Prohibited uses
                </H4>
                <NormalText>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website and Services or Content: 
                    (a) for any unlawful purpose; 
                    (b) to solicit others to perform or participate in any unlawful acts; 
                    (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; 
                    (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; 
                    (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, 
                    religion, ethnicity, race, age, national origin, or disability; 
                    (f) to submit false or misleading information; 
                    (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect 
                    the functionality or operation of the Website and Services, third party products and services, or the Internet; 
                    (h) to spam, phish, pharm, pretext, spider, crawl, or scrape; 
                    (i) for any obscene or immoral purpose; or 
                    (j) to interfere with or circumvent the security features of the Website and Services, third party products and services, 
                    or the Internet. We reserve the right to terminate your use of the Website and Services for violating any of the prohibited uses.</NormalText>
                
                <H4 className="my-4">
                    Limitation of liability
                </H4>
                <NormalText>To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, 
                    employees, agents, suppliers or licensors be liable to any person for any indirect, incidental, special, punitive, 
                    cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, 
                    use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) 
                    however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, 
                    negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have 
                    foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of the Operator and its affiliates, 
                    officers, employees, agents, suppliers and licensors relating to the services will be limited to an amount greater of one dollar 
                    or any amounts actually paid in cash by you to the Operator for the prior one month period prior to the first event or 
                    occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully 
                    compensate you for any losses or fails of its essential purpose.</NormalText>
                
                <H4 className="my-4">
                    Indemnification
                </H4>
                <NormalText>You agree to indemnify and hold the Operator and its affiliates, directors, officers, employees, agents, suppliers and 
                    licensors harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, 
                    incurred in connection with or arising from any third party allegations, claims, actions, disputes, or demands asserted 
                    against any of them as a result of or relating to your Content, your use of the Website and Services or any willful 
                    misconduct on your part.</NormalText>
                
                <H4 className="my-4">
                    Severability
                </H4>
                <NormalText>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to 
                    the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that 
                    they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of 
                    this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the 
                    intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect 
                    to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</NormalText>
                
                <H4 className="my-4">
                    Dispute resolution
                </H4>
                <NormalText>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by 
                    the substantive and procedural laws of Netherlands without regard to its rules on conflicts or choice of law and, 
                    to the extent applicable, the laws of Netherlands. The exclusive jurisdiction and venue for actions related to the subject 
                    matter hereof shall be the courts located in Netherlands, and you hereby submit to the personal jurisdiction of such courts. 
                    You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. 
                    The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</NormalText>
                
                <H4 className="my-4">
                    Changes and amendments
                </H4>
                <NormalText>We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, 
                    effective upon posting of an updated version of this Agreement on the Website. When we do, we will revise the updated 
                    date at the bottom of this page. Continued use of the Website and Services after any such changes shall constitute your 
                    consent to such changes.</NormalText>
                
                <H4 className="my-4">
                    Acceptance of these terms
                </H4>
                <NormalText>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the 
                    Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, 
                    you are not authorized to access or use the Website and Services.</NormalText>
                
                <H4 className="my-4">
                    Contacting us
                </H4>
                <NormalText className="mb-4">If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, 
                    you may send an email to &#105;n&#102;&#111;&#64;sny&#46;n&#117;.</NormalText>
                <NormalText>This document was last updated on March 8, 2021</NormalText>
            </Container>
        </DefaultLayout>
    )
}