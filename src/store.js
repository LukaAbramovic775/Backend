import { getMaxListeners } from "node:process";

let data = {
    korisnik: [
        {
            email: 'antonioiv@gmail.com',
            ime: 'Antonio',
            prezime: 'Ivanić',
        },
    ],
    artikli: [
        {
            sifra: '12345',
            naziv: 'Summer freshness',
            količina: '3',
        },
    ],
};

data.narudzba = [
    {
        datum: '03-08-2021',
        korisnik: data.korisnik[0],
        količina: [
            {
                količina: 3,
                artikl: data.artikli[0],
            },
        ],
    },
];

export default data;