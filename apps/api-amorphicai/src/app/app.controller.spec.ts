import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getData: jest.fn().mockReturnValue('mock data'),
            getUsers: jest.fn().mockReturnValue('mock users'),
            getUsersFromFirestore: jest
              .fn()
              .mockResolvedValue('mock users from firestore'),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  it('should return the data from the service', () => {
    expect(appController.getData()).toBe('mock data');
    expect(appService.getData).toHaveBeenCalled();
  });

  it('should return the users from the service', () => {
    expect(appController.getUsers()).toEqual({ users: 'mock users' });
    expect(appService.getUsers).toHaveBeenCalled();
  });

  it('should return the users from firestore', async () => {
    await expect(appController.getUsersFromFirestore()).resolves.toEqual({
      users: 'mock users from firestore',
    });
    expect(appService.getUsersFromFirestore).toHaveBeenCalled();
  });
});
