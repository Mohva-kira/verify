export const authorType = [
  
  {
    id: 1,
    name: 'Musique',
    charge: 10000
  },
  {
    id: 2,
    name: 'Dramatique',
    charge: 10000
  },
  {
    id: 3,
    name: 'littéraire',
    charge: 10000
  },
  {
    id: 4,
    name: 'cinéma, scénariste',
    charge: 10000
  },
  {
    id: 5,
    name: 'Editeur',
    charge: 30000
  },

]

export const fieldsPerson = [
    {
      fieldId: 'nom',
      name: 'Nom',
      type: 'text',
      placeholder: 'Traoré, Cissé',
      category:'identity'
    },
    {
      fieldId: 'prenom',
      name: 'Prenom',
      type: 'text',
      placeholder: 'Aminata, Brahima',
      category:'identity'
    },
    
    {
      fieldId: 'date_naissance',
      name: 'Date de naissance',
      type: 'date',
      placeholder: '01-01-1970',
      category:'date'
    },
    {
      fieldId: 'pays',
      name: 'Pays',
      type: 'text',
      placeholder: 'Mali',
      category:'adresse'
    },
    {
      fieldId: 'ville',
      name: 'Ville',
      type: 'text',
      placeholder: 'Bamako, Segou',
      category:'adresse'
    },
    {
      fieldId: 'region',
      name: 'Region',
      type: 'text',
      placeholder: 'Koulikoro, Sikasso',
      category:'adresse'
    },
    {
      fieldId: 'adresse',
      name: 'adresse',
      type: 'text',
      placeholder: 'Lafibougou, Faladie',
      category:'adresse'
    },
    {
      fieldId: 'cin',
      name: 'Piece d\'identité',
      type: 'file',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'file'
    },
    {
      fieldId: 'acte',
      name: 'Acte de naissance',
      type: 'file',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'file'
    },
    {
      fieldId: 'attestation',
      name: 'Attestation de diffusion',
      type: 'file',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'file'
    },
    {
      fieldId: 'oeuvre',
      name: 'Copie de l\'oeuvre',
      type: 'file',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'file'
    },
    {
      fieldId: 'contrat_edition',
      name: 'Contrat d\'edition',
      type: 'file',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'file'
    },
  ]

  export const fieldsMoral = [
    {
      fieldId: 'name',
      name: 'Raison social',
      type: 'text',
      placeholder: 'Africable, Byblos',
      category:'identity'
    },
    { 
      fieldId: 'nif',
      name: 'Numero d\'identification Fiscale',
      type: 'text',
      placeholder: 'NIF',
      category:'identity'
    },

    {
      fieldId: 'nina',
      name: 'NINA',
      type: 'text',
      placeholder: 'NINA',
      category:'identity'
    },
    {
      fieldId: 'rccm',
      name: 'RCCM',
      type: 'text',
      placeholder: 'Registre de commerce',
      category:'identity'
    },
    
    
    {
      fieldId: 'date',
      name: 'Date de creation',
      type: 'date',
      placeholder: '01-01-1970',
      category:'date'
    },
    {
      fieldId: 'representative',
      name: 'Représenter par',
      type: 'text',
      placeholder: 'Registre de commerce',
      category:'identity'
    },
    
    
    {
      fieldId: 'pays',
      name: 'Pays',
      type: 'text',
      placeholder: 'Mali',
      category:'adresse'
    },
    {
      fieldId: 'ville',
      name: 'Ville',
      type: 'text',
      placeholder: 'Bamako, Segou',
      category:'adresse'
    },
    {
      fieldId: 'region',
      name: 'Region',
      type: 'text',
      placeholder: 'Koulikoro, Sikasso',
      category:'adresse'
    },
    {
      fieldId: 'quartier',
      name: 'Quartier',
      type: 'text',
      placeholder: 'Lafibougou, Faladie',
      category:'adresse'
    },
    {
      fieldId: 'adresse_details',
      name: 'Precision Quartier',
      type: 'textarea',
      placeholder: 'Près du marché, fouroufourou carré',
      category:'adresse'
    },
    {
      fieldId: 'percent',
      name: 'Charge Variable?',
      type: 'checkbox',
      placeholder: '',
      category:'adresse'
    },
  ]
export const fieldsProfile = [
  {
    fieldId: 'nom',
    name: 'Nom',
    type: 'text',
    placeholder: 'Doumbia',
    category:'identity'
  },
  {
    fieldId: 'prenom',
    name: 'Prenom',
    type: 'text',
    placeholder: 'Mohamed',
    category:'identity'
  },
  {
    fieldId: 'numero',
    name: 'Numero',
    type: 'text',
    placeholder: '+223 89 89 89 89',
    category:'identity'
  },
  {
    fieldId: 'adresse',
    name: 'adresse',
    type: 'text',
    placeholder: 'Sirakoro',
    category:'identity'
  },
  {
    fieldId: 'poste',
    name: 'poste',
    type: 'text',
    placeholder: 'Percepteur, SG, Maire',
    category:'identity'
  },
]