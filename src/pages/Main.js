import { Lightning, Router } from "@lightningjs/sdk";
import { List } from "@lightningjs/ui";
import { ItemDescription, Page } from "../components";

export default class Main extends Page {
    static _template() {
        return {
            Content: {x: 140, type: List, w: w => w, y: 580, h: 500, direction: 'column', scroll: 0, scrollTransition: {duration: 0.4}}
        }
    }

    _getFocused() {
        return this.tag('Content');
    }

    $updateItemTitle(e) {
        this.tag('ItemDescription').item = e;
    }

    addStrips(array) {
        // const {backdrop, title, description} = array[0].items[0].item;
        // this.fireAncestors('$updateBackdrop', {src: backdrop});
        // this.fireAncestors('$getDetailWidget').show({title, description});
        this.tag('Content').add(array);
        this._refocus();
    }

    _handleLeft() {
        Router.focusWidget('Menu');
    }
}