/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function MessagePage() {
  return (
    <>
      <div className="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
                  <div className="">
                      <h1 className="fw-semibold mb-4 h6 text-primary-light">Message </h1>
                      <div className="">
                          <Link href="/" className="text-secondary-light hover-text-primary hover-underline">Dashboard </Link>
                          <span className="text-secondary-light">/ Message</span>
                      </div>
                  </div>
              </div>
      
              <div className="mt-24">
                  <div className="chat-wrapper">
                      <div className="chat-sidebar card">
                          <div className="px-24 py-16">
                              <form className="navbar-search d-block">
                                  <input type="text" className="bg-transparent w-100" name="search" placeholder="Search" />
                                  <iconify-icon icon="ion:search-outline" className="icon"></iconify-icon>
                              </form>
                          </div>
                          <div className="chat-all-list">
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/2.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Kathryn Murphy</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/3.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">James Michael</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single">
                                  <div className="img">
                                      <img src="/assets/images/chat/4.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Russell Lucas</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single">
                                  <div className="img">
                                      <img src="/assets/images/chat/5.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Caleb Bradley</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/6.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Bobby Roy</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/7.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Vincent Liam</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/8.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Randy Mason</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/9.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Albert Wayne</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/10.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Elijah Willie</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/2.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Kathryn Murphy</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/3.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">James Michael</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single">
                                  <div className="img">
                                      <img src="/assets/images/chat/4.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Russell Lucas</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single">
                                  <div className="img">
                                      <img src="/assets/images/chat/5.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Caleb Bradley</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/6.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Bobby Roy</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/7.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Vincent Liam</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/8.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Randy Mason</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/9.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Albert Wayne</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                              <div className="chat-sidebar-single active">
                                  <div className="img">
                                      <img src="/assets/images/chat/10.png" alt="image" />
                                  </div>
                                  <div className="info">
                                      <h6 className="text-sm mb-1">Elijah Willie</h6>
                                      <p className="mb-0 text-xs">hey! there i'm...</p>
                                  </div>
                                  <div className="action text-end">
                                      <p className="mb-0 text-neutral-400 text-xs lh-1">12:30 PM</p>
                                      <span
                                          className="w-16-px h-16-px text-xs rounded-circle bg-warning-main text-white d-inline-flex align-items-center justify-content-center">8</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="chat-main card">
                          <div className="chat-sidebar-single active">
                              <div className="img">
                                  <img src="/assets/images/chat/11.png" alt="image" />
                              </div>
                              <div className="info">
                                  <h6 className="text-md mb-0">Kathryn Murphy</h6>
                                  <p className="mb-0">Available</p>
                              </div>
                              <div className="action d-inline-flex align-items-center gap-3">
                                  <div className="btn-group">
                                      <button type="button" className="text-primary-light text-xl" data-bs-toggle="dropdown"
                                          data-bs-display="static" aria-expanded="false">
                                          <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                      </button>
                                      <ul className="dropdown-menu dropdown-menu-lg-end border">
                                          <li>
                                              <button
                                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2"
                                                  type="button">
                                                  <iconify-icon icon="mdi:clear-circle-outline"></iconify-icon>
                                                  Clear All
                                              </button>
                                          </li>
                                          <li>
                                              <button
                                                  className="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2"
                                                  type="button">
                                                  <iconify-icon icon="ic:baseline-block"></iconify-icon>
                                                  Block
                                              </button>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="chat-message-list">
                              <div className="chat-single-message left">
                                  <img src="/assets/images/chat/11.png" alt="image"
                                      className="avatar-lg object-fit-cover rounded-circle" />
                                  <div className="chat-message-content">
                                      <p className="mb-3">It is a long established fact that a reader will be distracted by the
                                          readable
                                          content
                                          of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                          a
                                          more-or-less
                                          normal distribution of letters.</p>
                                      <p className="chat-time mb-0">
                                          <span>6.30 pm</span>
                                      </p>
                                  </div>
                              </div>
                              <div className="chat-single-message right">
                                  <div className="chat-message-content">
                                      <p className="mb-3">It is a long established fact that a reader will be distracted by the
                                          readable
                                          content
                                          of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                          a
                                          more-or-less
                                          normal distribution of letters.</p>
                                      <p className="chat-time mb-0">
                                          <span>6.30 pm</span>
                                      </p>
                                  </div>
                              </div>
                              <div className="chat-single-message left">
                                  <img src="/assets/images/chat/11.png" alt="image"
                                      className="avatar-lg object-fit-cover rounded-circle" />
                                  <div className="chat-message-content">
                                      <p className="mb-3">The point of using Lorem Ipsum is that it has a more-or-less normal
                                          distribution of
                                          letters, as opposed to using 'Content here, content here', making it look like
                                          readable English.
                                          Many
                                          desktop publishing packages and web page editors now use Lorem Ipsum as their
                                          default.Contrary
                                          to
                                          popular belief, Lorem Ipsum is not simply random text is the model text for your
                                          company.</p>
                                      <p className="chat-time mb-0">
                                          <span>6.30 pm</span>
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <form className="chat-message-box">
                              <input type="text" name="chatMessage" placeholder="Write message" />
                              <div className="chat-message-box-action">
                                  <button type="button" className="text-xl">
                                      <iconify-icon icon="ph:link"></iconify-icon>
                                  </button>
                                  <button type="button" className="text-xl">
                                      <iconify-icon icon="solar:gallery-linear"></iconify-icon>
                                  </button>
                                  <button type="submit"
                                      className="btn btn-sm btn-primary-600 radius-8 d-inline-flex align-items-center gap-1">
                                      Send
                                      <iconify-icon icon="f7:paperplane"></iconify-icon>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>


    </>
  );
}
