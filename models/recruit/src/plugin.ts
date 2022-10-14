//
// Copyright © 2020 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import type { Client, Doc, Ref } from '@hcengineering/core'
import { ObjectSearchCategory, ObjectSearchFactory } from '@hcengineering/model-presentation'
import type { IntlString, Resource, Status } from '@hcengineering/platform'
import { mergeIds } from '@hcengineering/platform'
import { recruitId } from '@hcengineering/recruit'
import recruit from '@hcengineering/recruit-resources/src/plugin'
import { KanbanTemplate } from '@hcengineering/task'
import type { AnyComponent } from '@hcengineering/ui'
import type { Action, ActionCategory, ViewAction, Viewlet } from '@hcengineering/view'

export default mergeIds(recruitId, recruit, {
  action: {
    CreateOpinion: '' as Ref<Action>,
    CreateGlobalApplication: '' as Ref<Action>,
    CopyApplicationId: '' as Ref<Action>,
    CopyApplicationLink: '' as Ref<Action>,
    CopyCandidateLink: '' as Ref<Action>
  },
  actionImpl: {
    CreateOpinion: '' as ViewAction
  },
  category: {
    Recruit: '' as Ref<ActionCategory>
  },
  function: {
    GetApplicationId: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>,
    GetApplicationLink: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>,
    GetRecruitLink: '' as Resource<(doc: Doc, props: Record<string, any>) => Promise<string>>
  },
  string: {
    ApplicationShort: '' as IntlString,
    ApplicationsShort: '' as IntlString,
    RecruitApplication: '' as IntlString,
    TalentPools: '' as IntlString,
    SearchApplication: '' as IntlString,
    SearchVacancy: '' as IntlString,
    Application: '' as IntlString,
    AssignedRecruiter: '' as IntlString,
    Due: '' as IntlString,
    Source: '' as IntlString,
    ManageVacancyStatuses: '' as IntlString,
    EditVacancy: '' as IntlString,
    GotoTalents: '' as IntlString,
    GotoVacancies: '' as IntlString,
    GotoSkills: '' as IntlString,
    GotoAssigned: '' as IntlString,
    GotoApplicants: '' as IntlString,
    GotoRecruitApplication: '' as IntlString,
    VacancyList: '' as IntlString
  },
  validator: {
    ApplicantValidator: '' as Resource<<T extends Doc>(doc: T, client: Client) => Promise<Status>>
  },
  component: {
    CreateApplication: '' as AnyComponent,
    KanbanCard: '' as AnyComponent,
    ApplicationPresenter: '' as AnyComponent,
    ApplicationsPresenter: '' as AnyComponent,
    VacancyPresenter: '' as AnyComponent,
    EditApplication: '' as AnyComponent,
    TemplatesIcon: '' as AnyComponent,
    Applications: '' as AnyComponent,
    SkillsView: '' as AnyComponent,
    Vacancies: '' as AnyComponent,

    CreateReview: '' as AnyComponent,
    Reviews: '' as AnyComponent,
    KanbanReviewCard: '' as AnyComponent,
    EditReview: '' as AnyComponent,
    ReviewPresenter: '' as AnyComponent,
    Opinions: '' as AnyComponent,
    OpinionPresenter: '' as AnyComponent,
    NewCandidateHeader: '' as AnyComponent,
    ApplicantFilter: '' as AnyComponent,
    VacancyList: '' as AnyComponent
  },
  template: {
    DefaultVacancy: '' as Ref<KanbanTemplate>,
    Task: '' as Ref<KanbanTemplate>
  },
  completion: {
    ApplicationQuery: '' as Resource<ObjectSearchFactory>,
    ApplicationCategory: '' as Ref<ObjectSearchCategory>,
    VacancyCategory: '' as Ref<ObjectSearchCategory>,
    VacancyQuery: '' as Resource<ObjectSearchFactory>
  },
  viewlet: {
    TableCandidate: '' as Ref<Viewlet>,
    TableVacancy: '' as Ref<Viewlet>,
    TableApplicant: '' as Ref<Viewlet>,
    CalendarReview: '' as Ref<Viewlet>,
    TableReview: '' as Ref<Viewlet>
  }
})
