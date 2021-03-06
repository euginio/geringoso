import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/componentTemplate.html'
})
export class AppComponent {
    originalText: string = 'comida    música    zapato    arte    contento    gimnasta    abrigo    aplauso    regla    inspección transmitir    desprecio    amplitud    monstruo    obstrucción    arroyo    achiote    allanamiento    cachorro    Luisa    mienten    residuo    coincidencia    Paraguay    viento    ruiseñor    petunia    traición    Uruguay    despreciáis    Guaynabo    Uruguay    ley    rey   leyes    reyes    Cayey    Mayagüez    Mayagüez    güimo    güimo    güiro    güiro    guerra    guerra    guirnalda    guirnalda    guitarra    guitarra    leal    teatro    aéreo    reo    boa    María    caía    maíz    baúl    Raúl    salía    oía';
    parsedText: string;

    joinDiptongos() {
        // joining diptongos and triptongos to trait them as vowels
        this.parsedText = this.originalText.replace(/(?!(´.+´))([aeo]([iúu]|y )|[iúu][aeo]([iúu]|y )|[iúu][aeo]|[iúu]([iúu]|y ))/img, "´$2´");
    }

    toGerinso() {
        //cleaning diptongos
        this.parsedText = this.parsedText.replace(/´/img, "");
        // this.parsedText = this.parsedText.replace(/([aeiouáéíóú])( )/img, "$1p$1$2");
        // this.parsedText = this.parsedText.replace(/([aeiouáéíóú])([b-df-hj-nñp-tv-z])([b-df-hj-nñp-tv-z])-/img, "$1$2$3p$1");
        // this.parsedText = this.parsedText.replace(/([aeiouáéíóú])([b-df-hj-nñp-tv-z])-/img, "$1$2p$1");
        // this.parsedText = this.parsedText.replace(/([aeiouáéíóú])-/img, "$1p$1");


        this.parsedText = this.parsedText.replace(/([aeiouáéíóú])( |-)/img, "$1p$1$2");
        this.parsedText = this.parsedText.replace(/([aeiouáéíóú])([b-df-hj-nñp-tv-z])([b-df-hj-nñp-tv-z])( |-)/img, "$1$2$3p$1$4");
        this.parsedText = this.parsedText.replace(/([aeiouáéíóú])([b-df-hj-nñp-tv-z])( |-)/img, "$1$2p$1$3");


        this.parsedText = this.parsedText.replace(/-/img, "");
    }


    parse() {
        // separating vowels in two different syllable when is hiato (two strong vowel)
        this.parsedText = this.parsedText.replace(/([aeoáéó])([aeoáéó])/img, "$1-$2");

        // separating vowels in two different syllable when is hiato (one strong vowel and one weak vowel with accent mark)
        this.parsedText = this.parsedText.replace(/([aeíoúáéó])([aeíoúáéó])/img, "$1-$2");
        this.parsedText = this.parsedText.replace(/([aeíoúáéó])([aeíoúáéó])/img, "$1-$2");

        // four consonants
        this.parsedText = this.parsedText.replace(/([´aeioúu])([b-df-hj-nñp-tv-z][b-df-hj-nñp-tv-z])([b-df-hj-nñp-tv-z][b-df-hj-nñp-tv-z])([´aeioúu])/img, "$1$2-$3$4");

        // three consonants withouth r o l in third place
        this.parsedText = this.parsedText.replace(/([´aeioúu])([b-df-hj-nñp-tv-z])([b-df-hj-nñp-tv-z])([b-df-hjkmnñpqstv-z])([´aeioúu])/img, "$1$2$3-$4$5");

        // three consonants with r o l in third place
        this.parsedText = this.parsedText.replace(/([´aeioúu])([b-df-hj-nñp-tv-z])([b-df-hj-nñp-tv-z])([rl])([´aeioúu])/img, "$1$2-$3$4$5");

        // two consonants without r o l in second place
        this.parsedText = this.parsedText.replace(/([´aeioúu])([b-df-hj-nñp-tv-z])([b-df-hjkmnñpqstv-z])([´aeioúu])/img, "$1$2-$3$4");

        // two consonants with r o l in second place
        this.parsedText = this.parsedText.replace(/([´aeioúu])([b-df-hj-nñp-tv-z])([rl])([´aeioúu])/img, "$1-$2$3$4");

        // one consonant
        this.parsedText = this.parsedText.replace(/([´aéeiíoúu])([b-df-hj-nñp-tv-z])([´aeiíoúu])/img, "$1-$2$3");

        this.originalText = this.parsedText;
    }
}
