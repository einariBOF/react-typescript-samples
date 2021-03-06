import { call, put } from 'redux-saga/effects'
import memberAPI from '../api/memberAPI';
import MemberEntity from '../api/MemberEntity';
import fetchMembersCompleted from '../actions/fetchMembersCompleted';
import httpCallStarted from '../actions/httpCallStarted';
import httpCallCompleted from '../actions/httpCallCompleted';

// worker Saga: will be fired on LOAD_MEMBERS_REQUESTED actions
export function* fetchMembers(action) {
  let members : Array<MemberEntity>;

  // In case you need error handling: https://github.com/yelouafi/redux-saga/blob/master/docs/basics/ErrorHandling.md
  yield put(httpCallStarted());
  members = yield call(memberAPI.getAllMembersAsync)
  yield put(fetchMembersCompleted(members))
  yield put(httpCallCompleted());
}
