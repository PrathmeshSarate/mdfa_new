import React from 'react'
import Topbar from './Topbar';

function Ahi() {
    return (
        <>

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {<Topbar title="Animal Health Info" />}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="p-5 bg-danger text-white rounded">
                                    <h1>Lumpy Skin Disease in Cattle</h1>
                                    <span className="badge bg-dark p-3">
                                        PROFESSIONAL VERSION Lumpy Skin Disease in Cattle <br />
                                        By Paul Gibbs , BVSc, PhD, FRCVS, Department of Infectious Diseases and
                                        Immunology,
                                        <br />
                                        College of Veterinary Medicine, University of Florida
                                    </span>
                                    <p className="pt-5">
                                        Lumpy skin disease is a viral infection of cattle. Originally found in
                                        Africa, it has also spread to countries in the Middle East, Asia, and
                                        eastern Europe. <br />
                                        Clinical signs include fever, lacrimation, hypersalivation, and
                                        characteristic skin eruptions. Diagnosis is by histopathology, virus
                                        isolation, or PCR. Attenuated vaccines may help control outbreaks.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5 bg-success text-white rounded">
                                    <h1>Treatment and Prevention of Lumpy Skin Disease in Cattle</h1>
                                    <span className="badge bg-dark p-3">
                                        PROFESSIONAL VERSION Lumpy Skin Disease in Cattle <br />
                                        By Paul Gibbs , BVSc, PhD, FRCVS, Department of Infectious Diseases and
                                        Immunology,
                                        <br />
                                        College of Veterinary Medicine, University of Florida
                                    </span>
                                    <p className="pt-5">
                                        Attenuated virus vaccines may help control spread <br />
                                        <br />
                                        The spread of lumpy skin disease in recent years beyond its ancestral
                                        home of Africa is alarming. Quarantine restrictions have proved to be of
                                        limited use. Vaccination with attenuated virus offers the most promising
                                        method of control and was effective in halting the spread of the disease
                                        in the Balkans. <br />
                                        Administration of antibiotics to control secondary infection and good
                                        nursing care are recommended, but the large number of affected animals
                                        within a herd may preclude treatment.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
        </>
    )
}

export default Ahi