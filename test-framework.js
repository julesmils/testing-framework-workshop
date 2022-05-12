async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (err) {
    console.log(`❌ ${title}`);
    console.error(err);
  }
}

global.test = test;
