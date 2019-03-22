import FormInf, { OptionSelectText, SectionTypes, InputTypes } from "../interfaces/formInterfaces";


const globalOptions: OptionSelectText[] = [
    {
        text: 'dns_idle',
        format: /^.*$/
    },
    {
        text: 'dns_max_txt',
        format: /^.*$/
    },
    {
        text: 'dns_sleep',
        format: /^[0-9]*$/
    },
    {
        text: 'dns_stager_prepend',
        format: /^.*$/
    },
    {
        text: 'dns_stager_subhost',
        format: /^.*$/
    },
    {
        text: 'dns_ttl',
        format: /^.*$/
    },
    {
        text: 'host_stage',
        format: /^.*$/
    },
    {
        text: 'jitter',
        format: /^[0-9]*$/
    },
    {
        text: 'maxdns',
        format: /^.*$/
    },
    {
        text: 'pipename',
        format: /^.*$/
    },
    {
        text: 'pipename_stager',
        format: /^.*$/
    },
    {
        text: 'sleeptime',
        format: /^[0-9]*$/
    },
    {
        text: 'spawnto_x86',
        format: /^.*$/
    },
    {
        text: 'spawnto_x64',
        format: /^.*$/
    },
    {
        text: 'useragent',
        format: /^.*$/
    }
]
const cobaltStrikeProfile: FormInf = {
    sections: [
        {
            title: 'Global Options',
            type: SectionTypes.collapsable,
            fields: [
                {
                    type: InputTypes.FieldText,
                    path: 'name',
                    label: 'Name',
                    format: /.*/
                },
                {
                    type: InputTypes.FieldSelectText,
                    path: 'globaloptions',
                    options: globalOptions,
                }
            ]
        }, {
            title: 'HTTP-Get',
            type: SectionTypes.collapsable,
            fields: [
                {
                    type: InputTypes.FieldText,
                    path: 'httpget.uri',
                    label: 'URI',
                    format: /.*/
                },
                {
                    type: InputTypes.FieldText,
                    path: 'httpget.verb',
                    label: 'Verb',
                    format: /.*/
                }
            ],
            sections: [
                {
                    title: 'Client',
                    type: SectionTypes.collapsable,
                    fields: [
                        {
                            type: InputTypes.FieldPairText,
                            path: 'httpget.client.header',
                            label: 'Headers',
                            formatKey: /.*/,
                            formatValue: /.*/
                        },
                        {
                            type: InputTypes.FieldPairText,
                            path: 'httpget.client.paramer',
                            label: 'Parameters',
                            formatKey: /.*/,
                            formatValue: /.*/
                        }
                    ],
                    sections: [
                        {
                            title: 'Metadata',
                            type: SectionTypes.collapsable
                        }
                    ]
                },
                {
                    title: 'Server',
                    type: SectionTypes.collapsable,
                    fields: [
                        {
                            type: InputTypes.FieldPairText,
                            path: 'httpget.server.header',
                            label: 'Headers',
                            formatKey: /.*/,
                            formatValue: /.*/
                        },
                        {
                            type: InputTypes.FieldPairText,
                            path: 'httpget.server.paramer',
                            label: 'Parameters',
                            formatKey: /.*/,
                            formatValue: /.*/
                        }
                    ],
                    sections: [
                        {
                            title: 'Output',
                            type: SectionTypes.collapsable
                        }
                    ]
                }
            ]
        }, {
            title: 'HTTP-Post',
            type: SectionTypes.collapsable,
            sections: [
                {
                    title: 'Client',
                    type: SectionTypes.collapsable,
                    sections: [
                        {
                            title: 'ID',
                            type: SectionTypes.collapsable
                        },
                        {
                            title: 'Output',
                            type: SectionTypes.collapsable
                        }
                    ]
                },
                {
                    title: 'Server',
                    type: SectionTypes.collapsable,
                    sections: [
                        {
                            title: 'Output',
                            type: SectionTypes.collapsable
                        }
                    ]
                }

            ]
        }, {
            title: 'HTTP-Stager',
            type: SectionTypes.collapsable,
            sections: [
                {
                    title: 'Server',
                    type: SectionTypes.collapsable,
                    sections: [
                        {
                            title: 'Output',
                            type: SectionTypes.collapsable
                        }
                    ]
                }
            ]
        }
    ]
}

export default cobaltStrikeProfile;