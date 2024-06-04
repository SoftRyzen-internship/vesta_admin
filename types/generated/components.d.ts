import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemLocation extends Schema.Component {
  collectionName: 'components_item_locations';
  info: {
    displayName: 'Location';
    description: '';
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
  };
}

export interface ItemPartner extends Schema.Component {
  collectionName: 'components_item_partners';
  info: {
    displayName: 'Partner';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ItemService extends Schema.Component {
  collectionName: 'components_item_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ItemTeam extends Schema.Component {
  collectionName: 'components_item_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    status: Attribute.Enumeration<
      [
        '\u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0439/\u0432\u0435\u0442\u0435\u0440\u0430\u043D',
        '\u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0430/\u0432\u0435\u0442\u0435\u0440\u0430\u043D\u043A\u0430',
        '\u0440\u043E\u0434\u0438\u043D\u0430 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0433\u043E/\u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0430 ',
        '\u0440\u043E\u0434\u0438\u043D\u0430 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0457/\u0432\u0435\u0442\u0435\u0440\u0430\u043D\u043A\u0438'
      ]
    > &
      Attribute.Required;
    socialItem: Attribute.Component<'team.social', true>;
    image: Attribute.Media & Attribute.Required;
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
    social: Attribute.Enumeration<
      [
        'Instagram',
        'Facebook',
        'YouTube',
        'YouTube Music',
        'TikTok',
        'Soundcloud',
        'Spotify',
        'Diia'
      ]
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.location': ItemLocation;
      'item.partner': ItemPartner;
      'item.service': ItemService;
      'item.team': ItemTeam;
      'team.social': TeamSocial;
    }
  }
}
