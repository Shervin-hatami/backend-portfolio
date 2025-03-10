import type { Schema, Struct } from '@strapi/strapi';

export interface CharacterComponentsCharacterBuild
  extends Struct.ComponentSchema {
  collectionName: 'components_character_components_character_builds';
  info: {
    description: '';
    displayName: 'character-build';
    icon: 'alien';
  };
  attributes: {
    habilities: Schema.Attribute.Component<
      'character-components.character-habilities',
      false
    >;
    stats: Schema.Attribute.Component<
      'character-components.character-stats',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface CharacterComponentsCharacterHabilities
  extends Struct.ComponentSchema {
  collectionName: 'components_character_components_character_habilities';
  info: {
    displayName: 'character-habilities';
    icon: 'magic';
  };
  attributes: {
    CombatStyle: Schema.Attribute.Enumeration<
      ['melee', 'ranged', 'mid-range']
    > &
      Schema.Attribute.Required;
    PasiveSkill: Schema.Attribute.Enumeration<
      ['regeneration', 'extra-crit-chane', 'doble-armor', 'poison-imunity']
    > &
      Schema.Attribute.Required;
  };
}

export interface CharacterComponentsCharacterStats
  extends Struct.ComponentSchema {
  collectionName: 'components_character_components_character_stats';
  info: {
    displayName: 'character-stats';
    icon: 'book';
  };
  attributes: {
    statName: Schema.Attribute.String & Schema.Attribute.Required;
    statValue: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'character-components.character-build': CharacterComponentsCharacterBuild;
      'character-components.character-habilities': CharacterComponentsCharacterHabilities;
      'character-components.character-stats': CharacterComponentsCharacterStats;
    }
  }
}
