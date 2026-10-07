# NNFs utdanningskonferanse 2026

Selvstendig statisk nettside med HTML, CSS og JavaScript. Ingen installasjon, byggeverktøy eller eksterne skrifter kreves.

## GitHub og Netlify
1. Pakk ut ZIP-filen. Last opp INNHOLDET i mappen til roten av et GitHub-repository: HTML-filene, assets-mappen, netlify.toml og denne veiledningen.
2. Koble repositoryet til Netlify. Ingen build command. Publish directory er `.` (angitt i netlify.toml).
3. Aktiver form detection i Netlify Forms og publiser på nytt. Kontroller at skjemaet `foredragssporsmal` vises.
4. Send et testspørsmål på den publiserte siden og bekreft mottak i Netlify Forms. Kontroller også spam-mappen. Innsendingen må testes på Netlify, ikke GitHub Pages eller en lokal fil.
5. Gi konferansens moderator tilgang til mottaket i Netlify. Varsling kan settes opp i Netlify; koden sender ikke spørsmål direkte til foredragsholderne. Sjekk kontoens gjeldende grenser og priser.
6. Legg til nnfkonferansen.no i Netlify og bruk DNS-verdiene Netlify oppgir. Kontroller HTTPS før domenet tas i bruk.

## Før publisering
- Lotteritekst mangler; siden sier at detaljer ikke er tilgjengelige.
- Middag fredag og bankett lørdag har ikke klokkeslett. Legg dem inn når de er bekreftet.
- Avklar hvem som følger opp spørsmål, tilgang og rutine for sletting. Skjemaet ber om navn og spørsmål, men ikke e-post. Tjenesteleverandøren kan behandle tekniske data; nettsiden lover derfor ikke full anonymitet.
- Fullfør en reell test av skjemamottaket før siden deles med deltakerne.

## Vedlikehold
Åpne HTML-filene i en teksteditor. Hver side kan redigeres direkte. `foredrag.html` inneholder full programtekst. Dagsprogrammene inneholder korte sammendrag. Ved endring av tittel/tid må også omtale  oppdateres. Fargene ligger øverst i assets/style.css.

## Kilder og redaksjonelle valg
Programtekster og foredragsbilder: Invitasjon-2026-timeplan.pdf, side 2–7. Bare avsnitt, linjebryting og ord som ble delt av PDF-layouten er normalisert. Korte sammendrag er laget for dagsprogrammene. Bildene er rene utsnitt av originalens gjengivelse og beholder bakgrunner og sammensetning; ingen AI-endringer. Hotellbildet er hentet direkte fra PDF-en. Kildens bildeoppløsning begrenser skarpheten.
Søndagspause 12:00–12:15 og antrekk følger brukerens bekreftelser. Påmelding, priser og pakker er utelatt. PDF-en er ikke publisert fordi den også inneholder denne informasjonen. Bunnteksten med Kristiansand er utelatt. Konferansens nummer brukes ikke.
Farger er hentet fra prosjektets stilguide. Systemskrifter brukes som lokal fallback uten eksterne forespørsler.

## Filer
- index.html: forside
- fredag.html, lordag.html, sondag.html: dagsprogram
- foredrag.html: fullstendige omtaler og originalbilder
- praktisk.html, lotteri.html, spor.html: øvrige menypunkter
- takk.html: kvittering etter Netlify-innsending
- assets/: bilder, stiler og lite JavaScript

Alle programpunkter er tilgjengelige uten JavaScript. JavaScript hindrer innsending i lokal forhåndsvisning. Netlify må håndtere skjemaet for faktisk mottak.

## Revisjon 2
Forsiden har hotellbilde, kort velkomst og sju blå menyknapper. Toppmenyen er kun på undersidene. Footer er fjernet. Spørreskjemaet har navn og spørsmål, uten valg av foredrag. Praktisk informasjon samler frokost, lunsj og pauseservering under Andre måltider. Frokost 07:30–10:30 er bekreftet av arrangøren.
Erstatt de eksisterende filene i samme GitHub-mappe, inkludert assets/app.js og assets/style.css. Ikke legg revisjonen i en ny undermappe. Netlify publiserer ved neste deploy. Kontroller at skjemamottaket registrerer feltet navn etter publisering.
