import { InMemoryDbService } from 'angular-in-memory-web-api';
 
import { AnalyticsDashboardDb } from './dashboard-analytics'; 
import { ContactsFakeDb } from './contacts';
import { ProfileFakeDb } from './profile';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return { 
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets ,
            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

               // Profile
               'profile-timeline'     : ProfileFakeDb.timeline,
               'profile-photos-videos': ProfileFakeDb.photosVideos,
               'profile-about'        : ProfileFakeDb.about,
        };
    }
}
