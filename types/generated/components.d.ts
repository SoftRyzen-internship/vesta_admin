import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemPartner extends Schema.Component {
  collectionName: 'components_item_partners';
  info: {
    displayName: 'partner';
    icon: 'bulletList';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface TeamSocial extends Schema.Component {
  collectionName: 'components_team_socials';
  info: {
    displayName: 'social';
    icon: 'link';
    description: '';
  };
  attributes: {
    facebook: Attribute.String;
    instagram: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.partner': ItemPartner;
      'team.social': TeamSocial;
    }
  }
}
