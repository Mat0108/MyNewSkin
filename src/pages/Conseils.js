const Conseils = ()=>{
    return (<>
        <LayoutFullImage props={{titre:"CONSEILS & ASTUCES",image1:{url:v13,alt:"visage13"}}}/>
        <Layout1image props={{col1:switchtext("Nos conseils..."),image1:{url:v14,alt:"visage14"}}} />
        <ExpertiseHome/>
        <Layout1imageinv props={{col1:switchtext("Les derniers tutos..."),image1:{url:v15,alt:"visage15"}}}/>
        <Layout1image props={{col1:switchtext("Catégories"),image1:{url:v16,alt:"visage16"}}} />
        </>
    )
}
export default Conseils;