export default function Static(){
    return(
        <div>
        <div>Welcome to Static Page</div>
        <ul>
            <li>This paragraph right here is rendered statically using Nextjs.By generating the contenton on the server at build time, Nextjs ensures that search engines can easily crawl and index this page, boosting the SEO.Plus, serving static content leades to faster load times and a smoother user experience.And if i need Interactivity,Nextjs allows me to use the "use client directive for specific components"</li>
            <li>Pretting cool,right? Now navigate to 'client Page' to check how interactivity is added in nextjs</li>
        </ul>
    </div>
    )
}