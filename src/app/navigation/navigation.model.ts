import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
    public model: any[];

    constructor() {
        this.model = [
            {
                'id': 'home',
                'title': 'Home',
                'type': 'item',
                'icon': 'home',
                'url': '/home'
            },
            {
                'id': 'sellers',
                'title': 'Propagandistas',
                'type': 'item',
                'icon': 'supervisor_account',
                'url': '/propagandistas'
            },
            {
                'id': 'applications',
                'title': 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type': 'group',
                'children': [
                    {
                        'id': 'sample',
                        'title': 'Sample',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/sample',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.SAMPLE.BADGE',
                            'bg': '#F44336',
                            'fg': '#FFFFFF'
                        }
                    }
                ]
            }

        ];
    }
}
