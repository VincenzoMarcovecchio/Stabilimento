import Link from "next/link"
import { useRouter } from "next/router";
import Cards from "./Cards"


const Layout = ({ children}) => {


    const router = useRouter();


    return (

        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div className="col-auto px-0">
                    <div id="sidebar" className="collapse collapse-horizontal show border-end">
                        <div id="sidebar-nav" className=" pt-5 list-group border-0 rounded-0 text-sm-start min-vh-100">
                            <Link passHref href="/" ><a className={`${router.pathname == "/" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i><span className="ps-4 pe-5">Home</span></a></Link>
                            <Link passHref href="/aziende" ><a className={`${router.pathname == "/aziende" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-film"></i><span className="ps-4 pe-5">Aziende</span></a></Link>
                            <Link passHref href="/stabilimenti" ><a className={`${router.pathname == "/stabilimenti" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-film"></i><span className="ps-4 pe-5">Stabilimenti</span></a></Link>
                            <Link passHref href="/prodotti" ><a className={`${router.pathname == "/prodotti" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-heart"></i><span className="ps-4 pe-5">Prodotti</span></a></Link>
                            <Link passHref href="/lotti" ><a className={`${router.pathname == "/lotti" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-bricks"></i><span className="ps-4 pe-5">Lotti</span></a></Link>
                            <Link passHref href="/analytics" ><a className={`${router.pathname == "/analytics" && "active"} list-group-item list-group-item-action border-end-0 d-inline-block text-truncate ripple`} data-bs-parent="#sidebar"><i className="bi bi-clock"></i><span className="ps-4 pe-5">Analytics</span></a></Link>
                        </div>
                    </div>
                </div>
                <div className="col ps-md-2 pt-2">
                    <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
                    <section className="page-header pt-3">
                        <h2 className="text-capitalize"><strong>{router.pathname === "/" ? "Home" : router.pathname.substring(1)}</strong></h2>
                    </section>
                    <Cards/>
                    <hr />
                    <main className="">
                        <div className="">
                            {children}
                        </div>
                    </main>

                </div>
            </div>
        </div>

    )
}


export default Layout;






