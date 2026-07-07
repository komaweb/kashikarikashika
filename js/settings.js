export const settings = {

    self: {

        name: "自分",

        icon: "😳",

        color: "#4F8EF7"

    },

    partner: {

        name: "相手",

        icon: "🐱",

        color: "#FF6B81"

    }

};

export function getSelf() {

    return settings.self;

}

export function getPartner() {

    return settings.partner;

}

export function setSelfName(name) {

    settings.self.name = name;

}

export function setPartnerName(name) {

    settings.partner.name = name;

}

export function setSelfIcon(icon) {

    settings.self.icon = icon;

}

export function setPartnerIcon(icon) {

    settings.partner.icon = icon;

}

export function setSelfColor(color) {

    settings.self.color = color;

}

export function setPartnerColor(color) {

    settings.partner.color = color;

}
