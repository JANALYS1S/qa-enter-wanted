module.exports = {

    goodData: {
        input: {
            hdr: '123456789',
            mke: 'MKE',
            oai: 'CHI1234SI',
            nam: 'Harry Dresdens',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'Brown',
            off: 'Arson',
            dow: '05022016',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },

        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresdens.M.W.607.200.Brown.Arson.05022016......'
        }
    },

    badData: { //the 'key' for the fields should match the key of the selectors in css_selectors 
        input: {
            hdr: '123456789',
            mke: 'MKE',
            oai: 'CHI1234SI',
            nam: 'Harry Dresden',
            sex: 'M',
            rac: 'W',
            hgt: '607',
            wgt: '200',
            hai: 'Brown',
            off: 'Arson',
            dow: '05022016',
            oln: '12345',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: "If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present."
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    },

    badData2: { //the 'key' for the fields should match the key of the selectors in css_selectors 
        input: {
            hdr: 'abc123!@',
            mke: '#',
            oai: '12345abc',
            nam: 'Jo',
            sex: 'M',
            rac: 'C',
            hgt: '60',
            wgt: '20',
            hai: 'Br',
            off: 'Ja<3',
            dow: '0101201',
            oln: '123123123',
            ols: 'U',
            oly: '202',
            lic: '123A',
            lis: 'U',
            liy: '200'
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                hdr: `The "Header" field should be between 9 and 19 characters long.`,
                mke: `The "MKE" field should be between 2 and 4 characters long.`,
                oai: `The "Originating Agency Identifier" field should be 9 characters long.`,
                hgt: `The "Height" field should be 3 characters long.`,
                hai: `The "Hair" field should be between 3 and 10 characters long.`,
                off: `The "Offense" field should be between 5 and 15 characters long.`,
                dow: `The "Date of Warrant/Violation" field should be 8 characters long.`,
                ols: `The "DL State" field should be 2 characters long.`,
                oly: `The "DL Expiration Date" field should be 8 characters long.`,
                lic: `The "License Plate" field should be between 5 and 8 characters long.`,
                lis: `The "License State" field should be 2 characters long.`,
                liy: `The "License Year" field should be 4 characters long.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    },

    badData3: { //the 'key' for the fields should match the key of the selectors in css_selectors 
        input: {
            hdr: 'abcdefghi!@123456789',
            mke: '#abcD',
            oai: '12345abcde',
            nam: 'John $% Supercalifragilisticexp',
            sex: 'MM',
            rac: 'CC',
            hgt: '6010',
            wgt: '20000',
            hai: 'Brownishily',
            off: 'Jaywalk in UT <3',
            dow: '010120111',
            oln: 'UT:123123123123123123',
            ols: 'UTA',
            oly: '20202',
            lic: '12345ABCD',
            lis: 'UTA',
            liy: '20000'
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                hdr: `The "Header" field should be between 9 and 19 characters long.`,
                mke: `The "MKE" field should be between 2 and 4 characters long.`,
                oai: `The "Originating Agency Identifier" field should be 9 characters long.`,
                nam: `The "Name" field should be between 1 and 30 characters long.`,
                sex: `The "Sex" field should be 1 character long.`,
                rac: `The "Race" field should be 1 character long.`,
                hgt: `The "Height" field should be 3 characters long.`,
                wgt: `The "Weight" field should be between 1 and 3 characters long.`,
                hai: `The "Hair" field should be between 3 and 10 characters long.`,
                off: `The "Offense" field should be between 5 and 15 characters long.`,
                dow: `The "Date of Warrant/Violation" field should be 8 characters long.`,
                ols: `The "DL State" field should be 2 characters long.`,
                oly: `The "DL Expiration Date" field should be 8 characters long.`,
                lic: `The "License Plate" field should be between 5 and 8 characters long.`,
                lis: `The "License State" field should be 2 characters long.`,
                liy: `The "License Year" field should be 4 characters long.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: ''
        }
    }
}