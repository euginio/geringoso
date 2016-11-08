"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.originalText = 'comida    música    zapato    arte    contento    gimnasta    abrigo    aplauso    regla    inspección transmitir    desprecio    amplitud    monstruo    obstrucción    arroyo    achiote    allanamiento    cachorro    Luisa    mienten    residuo    coincidencia    Paraguay    viento    ruiseñor    petunia    traición    Uruguay    despreciáis    Guaynabo    Uruguay    ley    rey   leyes    reyes    Cayey    Mayagüez    Mayagüez    güimo    güimo    güiro    güiro    guerra    guerra    guirnalda    guirnalda    guitarra    guitarra    leal    teatro    aéreo    reo    boa    María    caía    maíz    baúl    Raúl    salía    oía';
    }
    AppComponent.prototype.joinDiptongos = function () {
        // joining diptongos and triptongos to trait them as vowels
        this.parsedText = this.originalText.replace(/(?!(´.+´))([aeo]([iúu]|y )|[iúu][aeo]([iúu]|y )|[iúu][aeo]|[iúu]([iúu]|y ))/img, "´$2´");
    };
    AppComponent.prototype.toGerinso = function () {
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
    };
    AppComponent.prototype.parse = function () {
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
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/componentTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map