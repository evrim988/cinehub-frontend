import React from 'react'

function MovieList() {
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="mt-4">Film Listesi</h5>
                            </div>
                            <div className="col-6 text-end">
                                <button className='btn btn-outline-success mt-3' style={{width: 250}}>Yeni Film Ekle</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0 mb-5">
                        <table className="table text-nowrap text-center">
                            <thead style={{fontSize: '14px',  fontFamily: "Montserrat"}}>
                                <tr>
                                    <th>ID</th>
                                    <th>Film Adı</th>
                                    <th>Film Hakkında</th>
                                    <th>Film Yılı</th>
                                    <th>Tür</th>
                                    <th>Poster</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>The Notebook</td>
                                    <td>The Notebook, farklı sınıflardan gelen Noah ve Allie’nin yıllar süren tutkulu aşkını anlatır...</td>
                                    <td>2004</td>
                                    <td>Dram</td>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList