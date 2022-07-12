// eslint-disable-next-line func-names
const genrate = (plop) => {
    plop.setGenerator('component', {
        description: 'component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
            },
        ],
        actions: (data) => {
            const actions = [];
            switch (data.type) {
                default: {
                    actions.push({
                        type: 'addMany',
                        skipIfExists: true,
                        globOptions: {
                            dot: true,
                        },
                        base: './plop-templates/src/components/component',
                        destination: 'src/components/{{name}}',
                        templateFiles: [
                            './plop-templates/src/components/component/*',
                            './plop-templates/src/components/component/**',
                        ],
                    });
                    break;
                }
            }
            return actions;
        },
    });
};

module.exports = genrate;
