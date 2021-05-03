import express from 'express';
import data from './store';

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati

app.get('/korisnik', (req, res) => res.json(data.korisnik));
app.get('/artikli', (req, res) => res.json(data.artikli));
app.get('/artikli/:artikl/narudzba/:datum/detalji', (req, res) => {
    let datum = req.params.datum;
    let artikl = req.params.artikl;

    let details = data.narudzba.filter((i) => i.datum == datum && i.artikl.sifra == artikl);
    if (details && details[0]) {
        res.json({
            data: details[0],
        });
    } else {
        res.status(500);
        res.json({
            error: 'argh!',
        });
    }
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));