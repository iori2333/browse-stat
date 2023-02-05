import browser from 'webextension-polyfill';
import { db } from './store';
import { updateLink } from '@/stat';

browser.tabs.onActivated.addListener(async activeInfo => {
  console.log('Tab activated:', activeInfo);
  const tab = await browser.tabs.get(activeInfo.tabId);
  console.log('Tab:', tab);
});

browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete' || !tab.url) {
    return;
  }
  const linkId = await updateLink(tab.url);
  console.log('Tab updated:', tabId, changeInfo, tab, linkId);
  console.log(await db.links.count());
});

browser.tabs.onCreated.addListener(async tab => {
  console.log('Tab created:', tab);
});

browser.tabs.onActivated.addListener(async activeInfo => {
  console.log('Tab activated:', activeInfo);
});
