import CardBenefit from "../Card/CardBenefit";

export default function Section3() {

    return (
        <section id="section3" className="lg:pt-30 md:pt-20 pt-16 dark:bg-dark ">
            <div className="dark:bg-slate-800 bg-orange-500">
                <div className="container px-4 py-12">
                    <h1 className="px-4 md:text-center md:text-3xl text-2xl lg:text-4xl font-bold text-white">Manfaat Perbaikan di Star Service</h1>
                    <div className=" flex flex-wrap justify-center gap-8 mt-10 px-4 lg:px-16">
                        {benefits.map((benefit, index) => (
                            <CardBenefit key={index} title={benefit.title} desc={benefit.desc} img={benefit.img} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const benefits = [ 
        {
          "title": "Garansi Perbaikan",
          "desc": "Kami menawarkan garansi pada perbaikan kami. Jika perbaikan asli gagal karena cacat pada suku cadang yang kami pasang atau karena kesalahan dalam pengerjaan saat memperbaiki perangkat.",
          "img": "./images/warranty.jpg"
        },
        {
          "title": "Teknisi Ahli yang Beneran Jago",
          "desc": "Kamu pasti mau teknisi terbaik yang ngerjain perangkat kamu, kan? Tenang, teknisi kita udah pro banget, jaminan bisa bikin perangkat kamu kembali kayak baru lagi.",
          "img": "./images/teknisi.jpeg"
        },
        {
          "title": "Perbaikan Cepat",
          "desc": "Kita bener-bener paham soal ini, makanya perbaikan kita gak cuma cepet tapi juga berkualitas. Kita ngerti banget gimana nyebelinnya perangkat rusak, jadi kita usahain supaya kamu bisa balik terkoneksi secepat mungkin.",
          "img": "./images/model2.jpeg"
        }
]